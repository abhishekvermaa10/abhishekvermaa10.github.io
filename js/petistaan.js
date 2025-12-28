(function () {
  const app = document.querySelector('[data-petistaan-app]');
  if (!app) return;

  const tableBody = app.querySelector('[data-owner-rows]');
  const emptyState = app.querySelector('[data-owner-empty]');
  const searchInput = app.querySelector('[data-owner-search]');
  const pageSizeSelect = app.querySelector('[data-page-size]');
  const paginationLabel = app.querySelector('[data-pagination-label]');
  const prevBtn = app.querySelector('[data-page-prev]');
  const nextBtn = app.querySelector('[data-page-next]');
  const totalRecords = app.querySelector('[data-total-records]');
  const createForm = app.querySelector('[data-create-form]');
  const createMessage = app.querySelector('[data-create-message]');
  const petCategorySelect = app.querySelector('[data-pet-category]');
  const dobField = app.querySelector('[data-dob-field]');
  const birthPlaceField = app.querySelector('[data-birthplace-field]');
  const dobInput = dobField?.querySelector('input');
  const birthPlaceInput = birthPlaceField?.querySelector('input');
  const mobileInput = createForm?.querySelector('input[name="mobileNumber"]');
  const ownerModal = document.querySelector('[data-owner-modal]');
  const ownerNameEl = ownerModal?.querySelector('[data-owner-name]');
  const ownerSubtitleEl = ownerModal?.querySelector('[data-owner-subtitle]');
  const ownerDetailsEl = ownerModal?.querySelector('[data-owner-details]');
  const petDetailsEl = ownerModal?.querySelector('[data-pet-details]');
  const updateForm = ownerModal?.querySelector('[data-update-form]');
  const deleteBtn = ownerModal?.querySelector('[data-delete-owner]');
  const statsModal = document.querySelector('[data-stats-modal]');
  const statsTree = statsModal?.querySelector('[data-stats-tree]');
  const statsTrigger = document.querySelector('[data-open-stats]');
  const infoModal = document.querySelector('[data-info-modal]');
  const infoTitle = infoModal?.querySelector('[data-info-title]');
  const infoBody = infoModal?.querySelector('[data-info-body]');
  const infoCta = infoModal?.querySelector('[data-info-cta]');
  const closeButtons = document.querySelectorAll('[data-close-modal]');
  const modals = document.querySelectorAll('.modal');

  const allowedPetTypes = ['BIRD', 'CAT', 'DOG', 'FISH'];
  const fieldLabels = {
    firstName: 'First name',
    lastName: 'Last name',
    gender: 'Gender',
    city: 'City',
    state: 'State',
    mobileNumber: 'Mobile number',
    emailId: 'Email ID',
    petName: 'Pet name',
    petGender: 'Pet gender',
    petCategory: 'Pet category',
    petType: 'Pet type',
    petDob: 'Pet date of birth',
    petPlaceOfBirth: 'Pet place of birth',
  };

  let owners = [];
  let filteredOwners = [];
  let currentOwner = null;
  let currentPage = 1;
  let statsData = null;
  const fieldWrappers = {};

  function init() {
    if (createForm) {
      createForm.querySelectorAll('[data-field]').forEach((wrapper) => {
        const fieldName = wrapper.dataset.field;
        if (!fieldName) return;
        fieldWrappers[fieldName] = wrapper;
        const control = wrapper.querySelector('input, select');
        if (control) {
          control.addEventListener('input', () => clearFieldError(fieldName));
          control.addEventListener('change', () => clearFieldError(fieldName));
        }
      });
    }
    wireDropdowns();
    setupInputConstraints();
    fetchOwners();
    fetchStats();
    wireTableControls();
    wireCreateForm();
    wireModals();
  }

  function setupInputConstraints() {
    if (mobileInput) {
      mobileInput.addEventListener('input', () => {
        const digitsOnly = mobileInput.value.replace(/\D/g, '');
        mobileInput.value = digitsOnly.slice(0, 10);
      });
    }
    if (dobInput) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const iso = [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, '0'),
        String(today.getDate()).padStart(2, '0'),
      ].join('-');
      dobInput.setAttribute('max', iso);
    }
  }

  async function fetchOwners() {
    try {
      const response = await fetch('json/get_all_owners.json');
      if (!response.ok) throw new Error('Failed to fetch owners');
      const data = await response.json();
      owners = (data.content || []).map(normalizeOwner);
      filteredOwners = [...owners];
      renderOwners();
    } catch (error) {
      showInfoDialog('Unable to load owners', 'Static data could not be loaded right now. Please refresh and try again.');
      console.error(error);
    }
  }

  async function fetchStats() {
    try {
      const response = await fetch('json/get_pet_stats.json');
      if (!response.ok) throw new Error('Failed to fetch stats');
      statsData = await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  function normalizeOwner(owner) {
    const pet = owner.petDTO || {};
    return {
      ...owner,
      fullName: [owner.firstName, owner.lastName].filter(Boolean).join(' ').trim(),
      location: [owner.city, owner.state].filter(Boolean).join(', '),
      petDTO: {
        ...pet,
        name: pet.name || '—',
        type: pet.type || '—',
        category: pet.category || '',
        birthDate: pet.birthDate || '',
        birthPlace: pet.birthPlace || '',
      },
    };
  }

  function wireTableControls() {
    searchInput?.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      filteredOwners = owners.filter((owner) => {
        const haystack = `${owner.fullName} ${owner.petDTO?.name || ''}`.toLowerCase();
        return haystack.includes(query);
      });
      currentPage = 1;
      renderOwners();
    });

    pageSizeSelect?.addEventListener('change', () => {
      currentPage = 1;
      renderOwners();
    });

    prevBtn?.addEventListener('click', () => {
      if (currentPage === 1) return;
      currentPage -= 1;
      renderOwners();
    });

    nextBtn?.addEventListener('click', () => {
      const totalPages = Math.max(1, Math.ceil(filteredOwners.length / getPageSize()));
      if (currentPage >= totalPages) return;
      currentPage += 1;
      renderOwners();
    });
  }

  function wireCreateForm() {
    const petCategoryInput =
    createForm?.querySelector('input[name="petCategory"]');
    petCategoryInput?.addEventListener('change', togglePetFields);
    togglePetFields();

    createForm?.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(createForm);
      const payload = {};
      for (const [key, value] of formData.entries()) {
        payload[key] = (value || '').trim();
      }
      clearAllFieldErrors();
      const errors = validateCreatePayload(payload);
      if (Object.keys(errors).length) {
        applyFieldErrors(errors);
        createMessage.textContent = '';
        return;
      }
      createMessage.textContent = 'Amazing! Time to wire these fields to your backend application.';
      showInfoDialog('Addition needs persistance', 'You tried adding new owner and pet information. Learn how to persist the data inside the Petistaan project by following Abhishek\'s Java & Spring Boot roadmap.');
      createForm.reset();
      togglePetFields();
      clearAllFieldErrors();
    });
  }

  function wireModals() {
    closeButtons.forEach((button) => {
      button.addEventListener('click', () => closeModal(button.closest('.modal')));
    });

    modals.forEach((modal) => {
      modal.addEventListener('click', (event) => {
        if (event.target === modal) {
          closeModal(modal);
        }
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        document.querySelectorAll('.modal.is-open').forEach(closeModal);
      }
    });

    updateForm?.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!currentOwner) return;
      const petName = updateForm.petName.value.trim();
      if (!petName) {
        updateForm.petName.focus();
        return;
      }
      closeModal(ownerModal);
      showInfoDialog('Updation needs persistance', `You tried renaming ${currentOwner.petDTO?.name || 'the pet'} to ${petName}. Learn how to persist the data inside the Petistaan project by following Abhishek's Java & Spring Boot roadmap.`);
      updateForm.reset();
    });

    deleteBtn?.addEventListener('click', () => {
      if (!currentOwner) return;
      closeModal(ownerModal);
      showInfoDialog('Deletion needs persistence', `You tried removing owner #${currentOwner.id}. Learn how to persist the data inside the Petistaan project by following Abhishek's Java & Spring Boot roadmap.`);
    });

    statsTrigger?.addEventListener('click', () => {
      if (!statsData) {
        showInfoDialog('Stats unavailable', 'The stats JSON could not be loaded right now. Refresh and try again.');
        return;
      }
      renderStatsTree();
      openModal(statsModal);
    });
  }

  function togglePetFields() {
    const categoryInput = createForm?.querySelector('input[name="petCategory"]');
    const category = categoryInput?.value?.toLowerCase();
    if (!dobField || !birthPlaceField) return;
    if (category === 'wild') {
      dobField.classList.add('is-hidden');
      birthPlaceField.classList.remove('is-hidden');
      dobInput?.removeAttribute('required');
      birthPlaceInput?.setAttribute('required', 'required');
      clearFieldError('petDob');
    } else {
      dobField.classList.remove('is-hidden');
      birthPlaceField.classList.add('is-hidden');
      dobInput?.setAttribute('required', 'required');
      birthPlaceInput?.removeAttribute('required');
      clearFieldError('petPlaceOfBirth');
    }
  }

  function validateCreatePayload(payload) {
    const errors = {};
    const addError = (field, message) => {
      if (!errors[field]) {
        errors[field] = [];
      }
      errors[field].push(message);
    };
    const requiredFields = [
      'firstName',
      'lastName',
      'gender',
      'city',
      'state',
      'mobileNumber',
      'emailId',
      'petName',
      'petGender',
      'petCategory',
      'petType',
    ];
    requiredFields.forEach((field) => {
      if (!payload[field]) {
        addError(field, `${getFieldLabel(field)} is required.`);
      }
    });

    ['gender', 'petGender'].forEach((field) => {
      const value = (payload[field] || '').toUpperCase();
      if (value && !['M', 'F'].includes(value)) {
        addError(field, `${getFieldLabel(field)} accepts only M or F.`);
      }
    });

    if (payload.mobileNumber && !/^\d{10}$/.test(payload.mobileNumber)) {
      addError('mobileNumber', 'Mobile number must be exactly 10 digits.');
    }

    if (payload.emailId && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.emailId)) {
      addError('emailId', 'Email must be a valid address.');
    }

    if (payload.petType && !allowedPetTypes.includes(payload.petType.toUpperCase())) {
      addError('petType', 'Pet type must be Bird, Cat, Dog, or Fish.');
    }

    const category = (payload.petCategory || '').toLowerCase();
    if (category === 'domestic' && !payload.petDob) {
      addError('petDob', 'Domestic pets require a date of birth.');
    }
    if (payload.petDob && isFutureDate(payload.petDob)) {
      addError('petDob', 'Pet date of birth cannot be in the future.');
    }
    if (category === 'wild' && !payload.petPlaceOfBirth) {
      addError('petPlaceOfBirth', 'Wild pets require place of birth.');
    }

    return errors;
  }

  function getFieldLabel(field) {
    return fieldLabels[field] || field;
  }

  function isFutureDate(value) {
    const inputDate = new Date(value);
    const today = new Date();
    if (Number.isNaN(inputDate.getTime())) {
      return false;
    }
    inputDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return inputDate > today;
  }

  function renderOwners() {
    if (!tableBody) return;
    const pageSize = getPageSize();
    const total = filteredOwners.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize) || 1);
    currentPage = Math.min(Math.max(currentPage, 1), totalPages);
    const start = (currentPage - 1) * pageSize;
    const records = filteredOwners.slice(start, start + pageSize);
    tableBody.innerHTML = '';

    if (!records.length) {
      emptyState?.classList.remove('is-hidden');
    } else {
      emptyState?.classList.add('is-hidden');
      records.forEach((owner) => {
        const row = document.createElement('tr');
        row.tabIndex = 0;
        row.dataset.ownerId = owner.id;
        row.innerHTML = `
          <td>${owner.id}</td>
          <td>
            <strong>${owner.fullName}</strong>
            <span>${owner.location || '—'}</span>
          </td>
          <td>
            <strong>${owner.petDTO?.name || '—'}</strong>
            <span>${owner.petDTO?.type || '—'}</span>
          </td>
        `;
        row.addEventListener('click', () => openOwnerModal(owner));
        row.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openOwnerModal(owner);
          }
        });
        tableBody.appendChild(row);
      });
    }

    if (paginationLabel) {
      paginationLabel.textContent = `Page ${total ? currentPage : 0} / ${total ? totalPages : 0}`;
    }
    if (totalRecords) {
      totalRecords.textContent = `${total} owner${total === 1 ? '' : 's'}`;
    }
    if (prevBtn) prevBtn.disabled = currentPage === 1 || !total;
    if (nextBtn) nextBtn.disabled = currentPage >= totalPages || !total;
  }

  function applyFieldErrors(errors) {
    Object.entries(errors).forEach(([field, messages]) => {
      const wrapper = fieldWrappers[field];
      if (!wrapper) return;
      const message = messages.join(' ');
      wrapper.dataset.error = message;
      const control = wrapper.querySelector('input, select');
      if (control) {
        control.setAttribute('aria-invalid', 'true');
        control.setAttribute('title', message);
      }
    });
  }

  function clearFieldError(field) {
    const wrapper = fieldWrappers[field];
    if (!wrapper) return;
    wrapper.removeAttribute('data-error');
    const control = wrapper.querySelector('input, select');
    if (control) {
      control.removeAttribute('aria-invalid');
      control.removeAttribute('title');
    }
  }

  function clearAllFieldErrors() {
    Object.keys(fieldWrappers).forEach((field) => clearFieldError(field));
  }

  function getPageSize() {
    return Number(pageSizeSelect?.value) || 10;
  }

  function openOwnerModal(owner) {
    if (!ownerModal) return;
    currentOwner = owner;
    if (ownerNameEl) {
      ownerNameEl.textContent = `${owner.fullName}`;
    }
    if (ownerSubtitleEl) {
      ownerSubtitleEl.textContent = `Owner #${owner.id} · ${owner.location || 'Location TBD'}`;
    }
    renderDetailList(ownerDetailsEl, [
      { label: 'Owner ID', value: `${owner.id}` },
      { label: 'Gender', value: formatGender(owner.gender) },
      { label: 'City', value: owner.city },
      { label: 'State', value: owner.state },
      { label: 'Mobile', value: owner.mobileNumber },
      { label: 'Email', value: owner.emailId },
    ]);
    const pet = owner.petDTO || {};
    renderDetailList(petDetailsEl, [
      { label: 'Pet ID', value: pet.id ? `${pet.id}` : '—' },
      { label: 'Name', value: pet.name },
      { label: 'Gender', value: formatGender(pet.gender) },
      { label: 'Type', value: formatLabel(pet.type) },
      { label: 'Category', value: formatLabel(pet.category) },
      { label: pet.birthDate ? 'Date of birth' : 'Place of birth', value: pet.birthDate || pet.birthPlace },
    ]);
    if (updateForm) {
      updateForm.reset();
      updateForm.petName.value = pet.name || '';
    }
    openModal(ownerModal);
  }

  function formatGender(value) {
    if (!value) return '—';
    return value.toUpperCase() === 'M' ? 'Male' : value.toUpperCase() === 'F' ? 'Female' : value;
  }

  function formatLabel(value) {
    if (!value) return '—';
    return value
      .toString()
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  function renderDetailList(container, items) {
    if (!container) return;
    container.innerHTML = '';
    items.forEach(({ label, value }) => {
      const group = document.createElement('div');
      const term = document.createElement('dt');
      const data = document.createElement('dd');
      term.textContent = label;
      data.textContent = value || '—';
      group.appendChild(term);
      group.appendChild(data);
      container.appendChild(group);
    });
  }

  function renderStatsTree() {
    if (!statsData || !statsTree) return;
    statsTree.innerHTML = '';

    const rootLevel = document.createElement('div');
    rootLevel.className = 'stats-tree__level stats-tree__level--root';
    rootLevel.appendChild(createTreeNode('Petistaan', `${statsData.total} Pets`, 'root'));
    statsTree.appendChild(rootLevel);

    const categoriesLevel = document.createElement('div');
    categoriesLevel.className = 'stats-tree__level stats-tree__level--categories';
    const categoryOrder = ['DOMESTIC', 'WILD'];

    categoryOrder.forEach((categoryKey) => {
      const categoryData = statsData.category?.[categoryKey];
      if (!categoryData) return;
      const column = document.createElement('div');
      column.className = 'stats-column';
      column.appendChild(createTreeNode(`${formatLabel(categoryKey)}`, `${categoryData.total} pets`, 'category'));

      const genderGrid = document.createElement('div');
      genderGrid.className = 'stats-gender-grid';
      const genderOrder = ['M', 'F'];

      genderOrder.forEach((genderKey) => {
        const genderData = categoryData.gender?.[genderKey];
        if (!genderData) return;
        const genderBlock = document.createElement('div');
        genderBlock.className = 'stats-gender';
        genderBlock.appendChild(createTreeNode(`${formatGender(genderKey)}`, `${genderData.total} pets`, 'gender'));

        const leafRow = document.createElement('div');
        leafRow.className = 'stats-leaf-row';
        const typeOrder = ['BIRD', 'CAT', 'DOG', 'FISH', 'RABBIT'];

        typeOrder.forEach((typeKey) => {
          const count = genderData.type?.[typeKey] ?? 0;
          leafRow.appendChild(createTreeNode(formatLabel(typeKey), `${count}`, 'leaf'));
        });

        genderBlock.appendChild(leafRow);
        genderGrid.appendChild(genderBlock);
      });

      column.appendChild(genderGrid);
      categoriesLevel.appendChild(column);
    });

    statsTree.appendChild(categoriesLevel);
  }

  function createTreeNode(title, value, modifier) {
    const node = document.createElement('div');
    node.className = `stats-node${modifier ? ` stats-node--${modifier}` : ''}`;
    const strong = document.createElement('strong');
    strong.textContent = title;
    const span = document.createElement('span');
    span.textContent = value;
    node.appendChild(strong);
    node.appendChild(span);
    return node;
  }

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('is-open');
    modal.removeAttribute('hidden');
    document.body.classList.add('modal-open');
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('hidden', 'hidden');
    if (!document.querySelector('.modal.is-open')) {
      document.body.classList.remove('modal-open');
    }
  }

  function showInfoDialog(title, message) {
    if (!infoModal) return;
    if (infoTitle) infoTitle.textContent = title;
    if (infoBody) infoBody.textContent = message;
    if (infoCta) infoCta.setAttribute('href', 'courses.html');
    openModal(infoModal);
  }

  function wireDropdowns() {
    const dropdowns = app.querySelectorAll('[data-dropdown]');

    dropdowns.forEach((dropdown) => {
      const textInput = dropdown.querySelector('input[type="text"]');
      const valueInput = dropdown.querySelector('input[type="hidden"]');
      const list = dropdown.querySelector('.search-suggestions');
      const fieldName = dropdown.dataset.name;

      if (!textInput || !valueInput || !list || !fieldName) return;

      textInput.addEventListener('click', () => {
        list.classList.toggle('is-visible');
      });

      list.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', () => {
          textInput.value = button.textContent;
          valueInput.value = button.dataset.value;
          valueInput.dispatchEvent(new Event('change', { bubbles: true }));
          list.classList.remove('is-visible');
          clearFieldError(fieldName);
        });
      });

      document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
          list.classList.remove('is-visible');
        }
      });
    });
  }

  init();
}());
