(function () {
  const courses = window.AV_COURSES || [];
  const url = new URL(window.location.href);
  const slug = url.searchParams.get('course') || 'java-basics';

  const course = courses.find((item) => item.slug === slug && item.hasDetail !== false);

  const app = document.querySelector('[data-course-app]');

  if (!course) {
    if (app) {
      app.innerHTML = `
        <div class="empty-state">
          <p>That course moved or is still cooking. Head back to <a href="courses.html">Courses</a>.</p>
        </div>
      `;
    }
    document.title = 'Course not found · Abhishek Verma';
    return;
  }

  const baseUrl = 'https://abhishekvermaa10.github.io';
  const courseUrl = `${baseUrl}/course.html?course=${slug}`;

  document.title = `${course.title} · Abhishek Verma`;
  setMeta('meta[property="og:title"]', `${course.title} · Abhishek Verma`);
  setMeta('meta[property="og:description"]', course.description || course.summary || '');
  setMeta('meta[property="og:url"]', courseUrl);
  setMeta('meta[property="og:image"]', `${baseUrl}/${course.cover}`);
  setMeta('meta[name="twitter:title"]', `${course.title} · Abhishek Verma`);
  setMeta('meta[name="twitter:description"]', course.description || course.summary || '');
  setMeta('meta[name="twitter:image"]', `${baseUrl}/${course.cover}`);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.href = courseUrl;
  }

  const setText = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) {
      el.innerHTML = value || '';
    }
  };

  function setMeta(selector, value) {
    const meta = document.querySelector(selector);
    if (meta && value) {
      meta.setAttribute('content', value);
    }
  }

  const hero = document.querySelector('[data-course-hero]');
  if (hero) {
    hero.style.setProperty('--hero-accent', course.accent || 'linear-gradient(135deg, #4facfe, #00f2fe)');
  }

  setText('[data-course-category]', formatCategory(course.category));
  setText('[data-course-title]', course.title);
  setText('[data-course-tagline]', course.tagline || course.summary || '');
  setText('[data-course-description]', course.description || course.summary || '');

  setText('[data-course-topics]', course.topics || '');
  setText('[data-course-duration]', course.duration || '');
  setText('[data-course-level]', course.level || '');

  const statusEl = document.querySelector('[data-course-status]');
  if (statusEl && course.status) {
    statusEl.textContent = course.status;
  }

  const playlistBtn = document.querySelector('[data-course-playlist]');
  if (playlistBtn) {
    playlistBtn.href = course.playlistUrl || course.href;
    playlistBtn.target = '_blank';
  }

  const codeBtn = document.querySelector('[data-course-code]');
  if (codeBtn) {
    if (course.repositoryUrl) {
      codeBtn.href = course.repositoryUrl;
      codeBtn.target = '_blank';
    } else {
      codeBtn.remove();
    }
  }

  populateList('[data-course-takeaways]', course.keyTakeaways);
  populateList('[data-course-toc]', course.tableOfContent, true);
  populateResources('[data-course-resources]', course.resources);
  populateCourseChips('[data-course-prereq-courses]', course.prerequisiteCourses);
  populateOptionalCourseChips('[data-course-optional-prereq-courses]', course.optionalPrerequisiteCourses);
  populateNext('[data-course-next]', course.nextSteps);

  function formatCategory(category) {
    const map = {
      java: 'Java',
      spring: 'Spring',
      others: 'Playlists',
    };
    if (Array.isArray(category)) {
      return category.map((cat) => map[cat] || 'Learning').join(', ');
    }
    return map[category] || 'Learning';
  }

  function populateList(selector, items, ordered = false) {
    const list = document.querySelector(selector);
    if (!list || !Array.isArray(items) || !items.length) {
      if (list) {
        list.parentElement?.classList.add('is-hidden');
      }
      return;
    }
    list.innerHTML = '';
    items.forEach((item) => {
      const el = document.createElement('li');
      if (ordered) {
        el.innerHTML = item;
      } else {
        el.textContent = item;
      }
      list.appendChild(el);
    });
  }

  function populateResources(selector, resources = []) {
    const wrap = document.querySelector(selector);
    if (!wrap || !resources.length) {
      if (wrap) {
        wrap.parentElement?.classList.add('is-hidden');
      }
      return;
    }
    wrap.innerHTML = '';
    resources.forEach((resource) => {
      const link = document.createElement('a');
      link.href = resource.url;
      link.target = '_blank';
      link.rel = 'noopener';
      link.className = 'resource-link';
      link.textContent = resource.label;
      wrap.appendChild(link);
    });
  }

  function populateCourseChips(selector, slugs = [], limitTwo = false) {
    const wrap = document.querySelector(selector);
    if (!wrap || !slugs.length) {
      if (wrap) {
        wrap.classList.add('is-hidden');
      }
      return;
    }
    wrap.innerHTML = '';
    slugs
      .slice(0, limitTwo ? 2 : slugs.length)
      .map((slugValue) => courses.find((item) => item.slug === slugValue))
      .filter(Boolean)
      .forEach((courseItem) => {
        const link = document.createElement('a');
        link.href = `course.html?course=${courseItem.slug}`;
        link.className = 'chip-link';
        link.textContent = courseItem.title;
        wrap.appendChild(link);
      });
  }

  function populateOptionalCourseChips(selector, slugs = [], limitTwo = false) {
    const wrap = document.querySelector(selector);
    if (!wrap || !slugs.length) {
      if (wrap) {
        wrap.classList.add('is-hidden');
      }
      return;
    }
    wrap.innerHTML = '';
    slugs
      .slice(0, limitTwo ? 2 : slugs.length)
      .map((slugValue) => courses.find((item) => item.slug === slugValue))
      .filter(Boolean)
      .forEach((courseItem) => {
        const link = document.createElement('a');
        link.href = `course.html?course=${courseItem.slug}`;
        link.className = 'chip-link';
        link.textContent = courseItem.title;
        wrap.appendChild(link);
      });
  }

  function populateNext(selector, slugs = []) {
    const wrap = document.querySelector(selector);
    if (!wrap || !slugs.length) {
      if (wrap) {
        wrap.innerHTML = '<p>No next steps yet — explore any existing course.</p>';
      }
      return;
    }
    wrap.innerHTML = '';
    slugs
      .slice(0, 2)
      .map((slugValue) => courses.find((item) => item.slug === slugValue))
      .filter(Boolean)
      .forEach((courseItem) => {
        const card = document.createElement('article');
        card.className = 'course-next-card';
        card.innerHTML = `
          <h4>${courseItem.title}</h4>
          <p>${courseItem.tagline || courseItem.summary || ''}</p>
          <a href="course.html?course=${courseItem.slug}" class="btn btn--ghost">View drop</a>
        `;
        wrap.appendChild(card);
      });
  }
})();
