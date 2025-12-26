(function () {
  const courses = (window.AV_COURSES || []).map((course) => ({
    ...course,
    href: course.href || `course.html?course=${course.slug}`,
  }));

  const gridState = new WeakMap();

  const categoryColor = {
    java: 'Java Core',
    spring: 'Spring & Cloud',
    tooling: 'Tooling',
    others: 'Playlists',
  };

  function formatCategory(category) {
    if (Array.isArray(category)) {
      return category.map((cat) => categoryColor[cat] || 'Learning').join(', ');
    }
    return categoryColor[category] || 'Learning';
  }

  function buildCourseCard(course) {
    const card = document.createElement('article');
    const categoryClass = Array.isArray(course.category) ? course.category[0] : course.category;
    card.className = `course-card course-card--${categoryClass}`;
    card.innerHTML = `
      <div class="course-card__media" style="background-image: url('${course.cover}')">
        <span class="pill pill--ghost">${formatCategory(course.category)}</span>
      </div>
      <div class="course-card__body">
        <div class="course-card__meta">
          <span>${course.level || 'Self-paced'}</span>
          <span>${course.topics || ''}</span>
        </div>
        <h3>${course.title}</h3>
        <p>${course.tagline || course.summary || ''}</p>
        <div class="course-card__footer">
          <span>${course.duration || ''}</span>
          <span>${course.status || ''}</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => {
      window.open(course.href, course.hasDetail !== false ? '_self' : '_blank');
    });
    return card;
  }

  function parseCSV(value) {
    if (!value) return [];
    return value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function applyFilters(grid, overrides = {}) {
    const state = gridState.get(grid) || {};
    const mergedState = { ...state, ...overrides };
    gridState.set(grid, mergedState);

    let trimmed = [...courses];
    if (grid.dataset.category && !mergedState.manualCategory) {
      mergedState.activeCategory = grid.dataset.category;
    }

    if (grid.dataset.featured === 'true') {
      mergedState.featuredOnly = true;
    }

    if (grid.dataset.detailOnly === 'true') {
      mergedState.detailOnly = true;
    }

    if (grid.dataset.exclude && !mergedState.exclude) {
      mergedState.exclude = parseCSV(grid.dataset.exclude);
    }

    const {
      activeCategory = 'all',
      featuredOnly,
      detailOnly,
      exclude,
    } = mergedState;

    if (featuredOnly) {
      trimmed = trimmed.filter((course) => course.featured);
    }

    if (detailOnly) {
      trimmed = trimmed.filter((course) => course.hasDetail !== false);
    }

    if (Array.isArray(exclude) && exclude.length) {
      trimmed = trimmed.filter((course) => !exclude.includes(course.slug));
    }

    if (activeCategory && activeCategory !== 'all') {
      trimmed = trimmed.filter((course) => {
        if (Array.isArray(course.category)) {
          return course.category.includes(activeCategory);
        }
        return course.category === activeCategory;
      });
    }

    const limit = Number(grid.dataset.limit) || trimmed.length;
    const sliced = trimmed.slice(0, limit);
    grid.innerHTML = '';

    if (!sliced.length) {
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.textContent = 'No courses match this vibe yet. Check back soon!';
      grid.appendChild(empty);
      return;
    }

    sliced.forEach((course) => grid.appendChild(buildCourseCard(course)));
  }

  document.querySelectorAll('[data-component="course-grid"]').forEach((grid) => {
    applyFilters(grid);
  });

  function wireFilterButtons() {
    const buttons = document.querySelectorAll('[data-course-filter]');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const targetSelector = button.dataset.target;
        const targetGrid = document.querySelector(targetSelector);
        if (!targetGrid) return;

        const value = button.dataset.courseFilter || 'all';
        const siblings = button.parentElement?.querySelectorAll('[data-course-filter]') || [];
        siblings.forEach((sib) => sib.classList.remove('is-active'));
        button.classList.add('is-active');

        applyFilters(targetGrid, {
          activeCategory: value,
          manualCategory: true,
        });
      });
    });
  }

  wireFilterButtons();

  function normalizeText(value) {
    return value.toLowerCase().trim();
  }

  function getSuggestions(query) {
    const text = normalizeText(query);
    if (!text) {
      return [];
    }
    return courses
      .filter((course) => {
        const haystack = [
          course.title,
          course.tagline,
          course.summary,
          ...(course.tags || []),
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return haystack.includes(text);
      })
      .slice(0, 6);
  }

  function renderSuggestions(list, suggestions) {
    list.innerHTML = '';
    if (!suggestions.length) {
      list.classList.remove('is-visible');
      return;
    }
    suggestions.forEach((course) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <button type="button" data-suggestion>
          <span>${course.title}</span>
          <span>${formatCategory(course.category)}</span>
        </button>
      `;
      li.querySelector('button').addEventListener('click', () => {
        window.open(course.href, course.hasDetail !== false ? '_self' : '_blank');
      });
      list.appendChild(li);
    });
    list.classList.add('is-visible');
  }

  document.querySelectorAll('[data-course-search]').forEach((wrapper) => {
    const form = wrapper.tagName === 'FORM' ? wrapper : wrapper.querySelector('form');
    const input = wrapper.querySelector('[data-course-input]');
    const suggestionsList = wrapper.querySelector('[data-course-suggestions]');

    if (!form || !input || !suggestionsList) {
      return;
    }

    function handleInput() {
      const suggestions = getSuggestions(input.value);
      renderSuggestions(suggestionsList, suggestions);
    }

    input.addEventListener('input', handleInput);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const suggestions = getSuggestions(input.value);
      if (suggestions.length) {
        window.open(
          suggestions[0].href,
          suggestions[0].hasDetail !== false ? '_self' : '_blank',
        );
      }
    });

    document.addEventListener('click', (event) => {
      if (!wrapper.contains(event.target)) {
        suggestionsList.classList.remove('is-visible');
      }
    });
  });

  document.querySelectorAll('[data-search-preset]').forEach((chip) => {
    chip.addEventListener('click', () => {
      const targetSelector = chip.dataset.targetInput;
      const target = document.querySelector(targetSelector);
      if (!target) return;
      target.value = chip.dataset.searchPreset || chip.textContent.trim();
      target.dispatchEvent(new Event('input', { bubbles: true }));
      target.focus();
    });
  });

  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      navToggle.classList.toggle('is-open');
    });
  }

  const yearEl = document.querySelector('[data-current-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
