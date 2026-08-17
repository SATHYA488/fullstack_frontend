/**
 * ENTERPRISE IT MVC PLATFORM - COURSE CONTROLLER
 * Handles course filtering, module navigation, completion toggling, and revision copy.
 */

class CourseController {
  constructor(courseModel, progressModel, appController) {
    this.courseModel = courseModel;
    this.progressModel = progressModel;
    this.appController = appController;
  }

  init() {
    this.initCategoryFilters();
    this.initSearchFilter();
    this.initModulePageInteractions();
    this.initCopyExamSummary();
    this.updateGlobalProgressDisplay();
  }

  initCategoryFilters() {
    const filterButtons = document.querySelectorAll('.category-filter-btn');
    const cards = document.querySelectorAll('.course-module-item');

    if (!filterButtons.length || !cards.length) return;

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
          b.classList.remove('active', 'btn-primary');
          b.classList.add('btn-outline-secondary');
        });

        btn.classList.add('active', 'btn-primary');
        btn.classList.remove('btn-outline-secondary');

        const category = btn.getAttribute('data-category');

        cards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (category === 'all' || cardCat === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  initSearchFilter() {
    const searchInput = document.getElementById('course-search-input');
    const cards = document.querySelectorAll('.course-module-item');

    if (!searchInput || !cards.length) return;

    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (!q || text.includes(q)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  initModulePageInteractions() {
    const completeBtn = document.getElementById('mark-complete-btn');
    if (!completeBtn) return;

    const currentModuleId = completeBtn.getAttribute('data-module-id');
    if (!currentModuleId) return;

    this.updateCompletionButtonUI(completeBtn, this.progressModel.isModuleCompleted(currentModuleId));

    completeBtn.addEventListener('click', () => {
      const isNowCompleted = this.progressModel.toggleModuleCompletion(currentModuleId);
      this.updateCompletionButtonUI(completeBtn, isNowCompleted);
      this.updateGlobalProgressDisplay();
      
      const message = isNowCompleted
        ? `<i class="bi bi-check-circle-fill text-emerald-400"></i> Module marked as complete!`
        : `<i class="bi bi-arrow-counterclockwise text-amber-400"></i> Module reset to in-progress.`;
      this.appController.showToast(message);
    });
  }

  updateCompletionButtonUI(btn, isCompleted) {
    if (isCompleted) {
      btn.className = 'btn btn-success px-4 py-2 rounded-xl font-semibold flex items-center gap-2';
      btn.innerHTML = `<i class="bi bi-check-all"></i> <span>Completed</span>`;
    } else {
      btn.className = 'btn btn-outline-primary px-4 py-2 rounded-xl font-semibold flex items-center gap-2';
      btn.innerHTML = `<i class="bi bi-check-circle"></i> <span>Mark as Complete</span>`;
    }
  }

  updateGlobalProgressDisplay() {
    const percentEls = document.querySelectorAll('.user-progress-percentage');
    const barEls = document.querySelectorAll('.user-progress-bar');
    const pct = this.progressModel.getCompletionPercentage(7);

    percentEls.forEach(el => el.textContent = `${pct}%`);
    barEls.forEach(bar => {
      bar.style.width = `${pct}%`;
      bar.setAttribute('aria-valuenow', pct);
    });
  }

  initCopyExamSummary() {
    const copyBtn = document.getElementById('copy-summary-btn');
    const summaryBox = document.getElementById('revision-summary-text');

    if (!copyBtn || !summaryBox) return;

    copyBtn.addEventListener('click', () => {
      const text = summaryBox.innerText.trim();
      navigator.clipboard.writeText(text).then(() => {
        this.appController.showToast('<i class="bi bi-clipboard-check-fill text-emerald-400"></i> 200-Word Exam Notes copied to clipboard!');
      }).catch(() => {
        this.appController.showToast('<i class="bi bi-exclamation-triangle text-amber-400"></i> Unable to access clipboard.');
      });
    });
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CourseController;
} else {
  window.CourseController = CourseController;
}
