/**
 * Controller: AppController
 * Responsibility: Master MVC Controller orchestrating Models, Views, and Event Dispatches.
 * Architecture: MVC - Controller Layer (Strictly Zero Emojis)
 */

class AppController {
  constructor() {
    // 1. Initialize Models
    this.authModel = new AuthModel();
    this.employeeModel = new EmployeeModel();
    this.projectModel = new ProjectModel();
    this.ticketModel = new TicketModel();
    this.assetModel = new AssetModel();
    this.financeModel = new FinanceModel();
    this.articleModel = new ArticleModel();
    this.questionModel = new QuestionModel();

    // 2. DOM Viewport Elements
    this.contentContainer = document.getElementById('mainContentArea');
    this.viewTitle = document.getElementById('currentViewTitle');
    this.themeToggleBtn = document.getElementById('themeToggleBtn');
    this.globalSearchInput = document.getElementById('globalSearchInput');

    // 3. Current active route
    this.activeView = 'dashboard';

    // 4. Initialize Views
    this.dashboardView = new DashboardView(this.contentContainer);
    this.employeeView = new EmployeeView(this.contentContainer);
    this.projectView = new ProjectView(this.contentContainer);
    this.ticketView = new TicketView(this.contentContainer);
    this.assetView = new AssetView(this.contentContainer);
    this.financeView = new FinanceView(this.contentContainer);
    this.articleView = new ArticleView(this.contentContainer);
    this.questionView = new QuestionView(this.contentContainer);

    this.init();
  }

  init() {
    this.setupTheme();
    this.setupNavigation();
    this.setupGlobalSearch();
    this.renderCurrentView();
  }

  setupTheme() {
    const savedTheme = localStorage.getItem('it_app_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('it_app_theme', next);
        ViewUtils.showToast(`Switched to ${next.toUpperCase()} theme`);
      });
    }
  }

  setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetView = item.getAttribute('data-view');
        if (targetView && targetView !== this.activeView) {
          navItems.forEach(n => n.classList.remove('active'));
          item.classList.add('active');
          this.activeView = targetView;
          this.renderCurrentView();
        }
      });
    });
  }

  setupGlobalSearch() {
    if (!this.globalSearchInput) return;

    this.globalSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const rows = this.contentContainer.querySelectorAll('.data-table tbody tr');
      if (rows.length > 0) {
        rows.forEach(row => {
          const text = row.textContent.toLowerCase();
          row.style.display = text.includes(query) ? '' : 'none';
        });
      }
    });
  }

  renderCurrentView() {
    if (this.globalSearchInput) this.globalSearchInput.value = '';

    switch (this.activeView) {
      case 'dashboard':
        this.viewTitle.textContent = 'Executive IT Operations Dashboard';
        this.dashboardView.render({
          employees: this.employeeModel.getAll(),
          projects: this.projectModel.getAll(),
          tickets: this.ticketModel.getAll(),
          assets: this.assetModel.getAll(),
          finance: this.financeModel.getAll()
        });
        this.attachDashboardHandlers();
        break;

      case 'employees':
        this.viewTitle.textContent = 'Engineering Personnel & Staff Directory';
        this.employeeView.render(this.employeeModel.getAll());
        this.attachEmployeeHandlers();
        break;

      case 'projects':
        this.viewTitle.textContent = 'Enterprise Project Portfolio & Sprints';
        this.projectView.render(this.projectModel.getAll());
        this.attachProjectHandlers();
        break;

      case 'tickets':
        this.viewTitle.textContent = 'IT Support & Incident Resolution Helpdesk';
        this.ticketView.render(this.ticketModel.getAll());
        this.attachTicketHandlers();
        break;

      case 'assets':
        this.viewTitle.textContent = 'Hardware & Cloud Infrastructure Assets';
        this.assetView.render(this.assetModel.getAll());
        this.attachAssetHandlers();
        break;

      case 'finance':
        this.viewTitle.textContent = 'Commercial Client Invoices & POS Billing';
        this.financeView.render(this.financeModel.getAll());
        this.attachFinanceHandlers();
        break;

      case 'articles':
        this.viewTitle.textContent = 'Technical Knowledge Base & Architecture Articles';
        this.articleView.render(this.articleModel.getAll());
        this.attachArticleHandlers();
        break;

      case 'questions':
        this.viewTitle.textContent = 'Technical Assessment & Question Bank';
        this.questionView.render(this.questionModel.getAll());
        this.attachQuestionHandlers();
        break;

      default:
        this.viewTitle.textContent = 'Operations Dashboard';
        this.dashboardView.render({
          employees: this.employeeModel.getAll(),
          projects: this.projectModel.getAll(),
          tickets: this.ticketModel.getAll(),
          assets: this.assetModel.getAll(),
          finance: this.financeModel.getAll()
        });
    }
  }

  // Dashboard Handlers
  attachDashboardHandlers() {
    const viewProjectsBtn = document.getElementById('dashViewAllProjectsBtn');
    if (viewProjectsBtn) {
      viewProjectsBtn.addEventListener('click', () => {
        this.navigateDirectTo('projects');
      });
    }

    const viewTicketsBtn = document.getElementById('dashViewAllTicketsBtn');
    if (viewTicketsBtn) {
      viewTicketsBtn.addEventListener('click', () => {
        this.navigateDirectTo('tickets');
      });
    }
  }

  navigateDirectTo(viewName) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(n => {
      n.classList.toggle('active', n.getAttribute('data-view') === viewName);
    });
    this.activeView = viewName;
    this.renderCurrentView();
  }

  // Employee Handlers
  attachEmployeeHandlers() {
    const toggleBtn = document.getElementById('toggleAddEmpFormBtn');
    const formContainer = document.getElementById('addEmployeeFormContainer');
    const cancelBtn = document.getElementById('cancelAddEmpBtn');
    const form = document.getElementById('newEmployeeForm');

    if (toggleBtn && formContainer) {
      toggleBtn.addEventListener('click', () => {
        const isHidden = formContainer.style.display === 'none';
        formContainer.style.display = isHidden ? 'block' : 'none';
      });
    }

    if (cancelBtn && formContainer) {
      cancelBtn.addEventListener('click', () => {
        formContainer.style.display = 'none';
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('empEmailInput').value.trim();
        
        if (!email.includes('@') || !email.includes('.')) {
          ViewUtils.showToast('Validation Error: Corporate email format is required.');
          return;
        }

        const newEmp = this.employeeModel.add({
          name: document.getElementById('empNameInput').value,
          email: email,
          department: document.getElementById('empDeptInput').value,
          role: document.getElementById('empRoleInput').value,
          skills: document.getElementById('empSkillsInput').value,
          hourlyRate: document.getElementById('empRateInput').value
        });

        ViewUtils.showToast(`Personnel record created for ${newEmp.name}`);
        this.renderCurrentView();
      });
    }

    const deleteBtns = this.contentContainer.querySelectorAll('.delete-emp-btn');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (confirm(`Confirm deletion of employee record [${id}]?`)) {
          this.employeeModel.delete(id);
          ViewUtils.showToast(`Employee record [${id}] removed`);
          this.renderCurrentView();
        }
      });
    });
  }

  // Project Handlers
  attachProjectHandlers() {
    const toggleBtn = document.getElementById('toggleAddProjectFormBtn');
    const formContainer = document.getElementById('addProjectFormContainer');
    const cancelBtn = document.getElementById('cancelAddProjectBtn');
    const form = document.getElementById('newProjectForm');

    if (toggleBtn && formContainer) {
      toggleBtn.addEventListener('click', () => {
        const isHidden = formContainer.style.display === 'none';
        formContainer.style.display = isHidden ? 'block' : 'none';
      });
    }

    if (cancelBtn && formContainer) {
      cancelBtn.addEventListener('click', () => {
        formContainer.style.display = 'none';
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newPrj = this.projectModel.add({
          code: document.getElementById('prjCodeInput').value,
          title: document.getElementById('prjTitleInput').value,
          client: document.getElementById('prjClientInput').value,
          lead: document.getElementById('prjLeadInput').value,
          budget: document.getElementById('prjBudgetInput').value,
          deadline: document.getElementById('prjDeadlineInput').value
        });

        ViewUtils.showToast(`Project charter [${newPrj.code}] registered`);
        this.renderCurrentView();
      });
    }

    const updateBtns = this.contentContainer.querySelectorAll('.update-prj-btn');
    updateBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const prj = this.projectModel.getById(id);
        if (prj) {
          const nextProg = Math.min(prj.progress + 10, 100);
          this.projectModel.updateProgress(id, nextProg);
          ViewUtils.showToast(`Updated [${prj.code}] progress to ${nextProg}%`);
          this.renderCurrentView();
        }
      });
    });

    const deleteBtns = this.contentContainer.querySelectorAll('.delete-prj-btn');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (confirm(`Confirm deletion of project [${id}]?`)) {
          this.projectModel.delete(id);
          ViewUtils.showToast(`Project [${id}] deleted`);
          this.renderCurrentView();
        }
      });
    });
  }

  // Ticket Handlers
  attachTicketHandlers() {
    const toggleBtn = document.getElementById('toggleAddTicketFormBtn');
    const formContainer = document.getElementById('addTicketFormContainer');
    const cancelBtn = document.getElementById('cancelAddTicketBtn');
    const form = document.getElementById('newTicketForm');

    if (toggleBtn && formContainer) {
      toggleBtn.addEventListener('click', () => {
        const isHidden = formContainer.style.display === 'none';
        formContainer.style.display = isHidden ? 'block' : 'none';
      });
    }

    if (cancelBtn && formContainer) {
      cancelBtn.addEventListener('click', () => {
        formContainer.style.display = 'none';
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTicket = this.ticketModel.add({
          title: document.getElementById('tckTitleInput').value,
          priority: document.getElementById('tckPriorityInput').value,
          department: document.getElementById('tckDeptInput').value,
          assignee: document.getElementById('tckAssigneeInput').value
        });

        ViewUtils.showToast(`Incident ticket [${newTicket.id}] logged`);
        this.renderCurrentView();
      });
    }

    const resolveBtns = this.contentContainer.querySelectorAll('.resolve-ticket-btn');
    resolveBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        this.ticketModel.updateStatus(id, 'Resolved');
        ViewUtils.showToast(`Ticket [${id}] marked as Resolved`);
        this.renderCurrentView();
      });
    });

    const reopenBtns = this.contentContainer.querySelectorAll('.reopen-ticket-btn');
    reopenBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        this.ticketModel.updateStatus(id, 'Open');
        ViewUtils.showToast(`Ticket [${id}] reopened`);
        this.renderCurrentView();
      });
    });

    const deleteBtns = this.contentContainer.querySelectorAll('.delete-ticket-btn');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        this.ticketModel.delete(id);
        ViewUtils.showToast(`Ticket [${id}] removed`);
        this.renderCurrentView();
      });
    });
  }

  // Asset Handlers
  attachAssetHandlers() {
    const toggleBtn = document.getElementById('toggleAddAssetFormBtn');
    const formContainer = document.getElementById('addAssetFormContainer');
    const cancelBtn = document.getElementById('cancelAddAssetBtn');
    const form = document.getElementById('newAssetForm');

    if (toggleBtn && formContainer) {
      toggleBtn.addEventListener('click', () => {
        const isHidden = formContainer.style.display === 'none';
        formContainer.style.display = isHidden ? 'block' : 'none';
      });
    }

    if (cancelBtn && formContainer) {
      cancelBtn.addEventListener('click', () => {
        formContainer.style.display = 'none';
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newAsset = this.assetModel.add({
          name: document.getElementById('astNameInput').value,
          type: document.getElementById('astTypeInput').value,
          serial: document.getElementById('astSerialInput').value,
          assignedTo: document.getElementById('astAssigneeInput').value,
          cost: document.getElementById('astCostInput').value
        });

        ViewUtils.showToast(`Infrastructure asset [${newAsset.serial}] registered`);
        this.renderCurrentView();
      });
    }

    const deleteBtns = this.contentContainer.querySelectorAll('.delete-asset-btn');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        this.assetModel.delete(id);
        ViewUtils.showToast(`Asset [${id}] decommissioned`);
        this.renderCurrentView();
      });
    });
  }

  // Finance Handlers
  attachFinanceHandlers() {
    const hoursInput = document.getElementById('billHoursInput');
    const rateInput = document.getElementById('billRateInput');
    const discountInput = document.getElementById('billDiscountInput');
    const taxInput = document.getElementById('billTaxInput');
    const form = document.getElementById('posBillingForm');

    const subtotalEl = document.getElementById('posCalcSubtotal');
    const discountEl = document.getElementById('posCalcDiscount');
    const taxEl = document.getElementById('posCalcTax');
    const totalEl = document.getElementById('posCalcTotal');

    const recalculate = () => {
      const hours = parseFloat(hoursInput.value) || 0;
      const rate = parseFloat(rateInput.value) || 0;
      const discount = parseFloat(discountInput.value) || 0;
      const tax = parseFloat(taxInput.value) || 0;

      const calc = this.financeModel.calculateInvoice(hours, rate, discount, tax);

      if (subtotalEl) subtotalEl.textContent = ViewUtils.formatCurrency(calc.subtotal);
      if (discountEl) discountEl.textContent = `-${ViewUtils.formatCurrency(calc.discountAmount)}`;
      if (taxEl) taxEl.textContent = `+${ViewUtils.formatCurrency(calc.taxAmount)}`;
      if (totalEl) totalEl.textContent = ViewUtils.formatCurrency(calc.total);
    };

    if (hoursInput) hoursInput.addEventListener('input', recalculate);
    if (rateInput) rateInput.addEventListener('input', recalculate);
    if (discountInput) discountInput.addEventListener('input', recalculate);
    if (taxInput) taxInput.addEventListener('input', recalculate);

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newInvoice = this.financeModel.createInvoice({
          client: document.getElementById('billClientInput').value,
          project: document.getElementById('billProjectInput').value,
          hoursLogged: hoursInput.value,
          rate: rateInput.value,
          discountPct: discountInput.value,
          taxRate: taxInput.value,
          status: 'Pending'
        });

        ViewUtils.showToast(`Commercial invoice [${newInvoice.id}] generated for ${newInvoice.client}`);
        this.renderCurrentView();
      });
    }
  }

  // Article Handlers
  attachArticleHandlers() {
    const toggleBtn = document.getElementById('toggleAddArticleFormBtn');
    const formContainer = document.getElementById('addArticleFormContainer');
    const cancelBtn = document.getElementById('cancelAddArticleBtn');
    const form = document.getElementById('newArticleForm');

    if (toggleBtn && formContainer) {
      toggleBtn.addEventListener('click', () => {
        const isHidden = formContainer.style.display === 'none';
        formContainer.style.display = isHidden ? 'block' : 'none';
      });
    }

    if (cancelBtn && formContainer) {
      cancelBtn.addEventListener('click', () => {
        formContainer.style.display = 'none';
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newArt = this.articleModel.add({
          title: document.getElementById('artTitleInput').value,
          category: document.getElementById('artCategoryInput').value,
          author: document.getElementById('artAuthorInput').value,
          summary: document.getElementById('artSummaryInput').value,
          content: document.getElementById('artContentInput').value,
          tags: document.getElementById('artTagsInput').value,
          readTimeMinutes: document.getElementById('artReadTimeInput').value
        });

        ViewUtils.showToast(`Technical article [${newArt.title}] published`);
        this.renderCurrentView();
      });
    }

    const likeBtns = this.contentContainer.querySelectorAll('.like-article-btn');
    likeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const count = this.articleModel.likeArticle(id);
        btn.textContent = `Like (${count})`;
        ViewUtils.showToast('Article liked');
      });
    });

    const deleteBtns = this.contentContainer.querySelectorAll('.delete-article-btn');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (confirm(`Confirm deletion of article [${id}]?`)) {
          this.articleModel.delete(id);
          ViewUtils.showToast(`Article [${id}] removed`);
          this.renderCurrentView();
        }
      });
    });
  }

  // Question Handlers
  attachQuestionHandlers() {
    const toggleBtn = document.getElementById('toggleAddQuestionFormBtn');
    const formContainer = document.getElementById('addQuestionFormContainer');
    const cancelBtn = document.getElementById('cancelAddQuestionBtn');
    const form = document.getElementById('newQuestionForm');
    const assessmentForm = document.getElementById('assessmentSubmissionForm');

    if (toggleBtn && formContainer) {
      toggleBtn.addEventListener('click', () => {
        const isHidden = formContainer.style.display === 'none';
        formContainer.style.display = isHidden ? 'block' : 'none';
      });
    }

    if (cancelBtn && formContainer) {
      cancelBtn.addEventListener('click', () => {
        formContainer.style.display = 'none';
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const optionsLines = document.getElementById('qstOptionsInput').value.trim().split('\n').map(o => o.trim()).filter(Boolean);
        if (optionsLines.length < 2) {
          ViewUtils.showToast('Validation Error: Provide at least 2 option choices.');
          return;
        }

        const newQst = this.questionModel.add({
          questionText: document.getElementById('qstTextInput').value,
          category: document.getElementById('qstCategoryInput').value,
          difficulty: document.getElementById('qstDifficultyInput').value,
          options: optionsLines,
          correctOptionIndex: document.getElementById('qstCorrectIndexInput').value,
          points: document.getElementById('qstPointsInput').value,
          explanation: document.getElementById('qstExplanationInput').value
        });

        ViewUtils.showToast(`Assessment question [${newQst.id}] created`);
        this.renderCurrentView();
      });
    }

    if (assessmentForm) {
      assessmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const questions = this.questionModel.getAll();
        const answersMap = {};

        questions.forEach(q => {
          const selected = assessmentForm.querySelector(`input[name="qst_${q.id}"]:checked`);
          if (selected) {
            answersMap[q.id] = parseInt(selected.value, 10);
          }
        });

        // Evaluate score
        const result = this.questionModel.calculateAssessmentScore(answersMap);

        // Show inline feedback for each question
        questions.forEach(q => {
          const feedbackEl = document.getElementById(`feedback_${q.id}`);
          const validation = this.questionModel.validateAnswer(q.id, answersMap[q.id]);

          if (feedbackEl) {
            feedbackEl.style.display = 'block';
            if (validation.isCorrect) {
              feedbackEl.style.background = 'var(--status-success-bg)';
              feedbackEl.style.color = 'var(--status-success)';
              feedbackEl.innerHTML = `<strong>[Correct]</strong> +${validation.pointsAwarded} pts. ${ViewUtils.escapeHTML(validation.explanation)}`;
            } else {
              feedbackEl.style.background = 'var(--status-danger-bg)';
              feedbackEl.style.color = 'var(--status-danger)';
              const correctText = q.options[q.correctOptionIndex];
              feedbackEl.innerHTML = `<strong>[Incorrect]</strong> Correct Option: "${ViewUtils.escapeHTML(correctText)}". ${ViewUtils.escapeHTML(validation.explanation)}`;
            }
          }
        });

        const summaryEl = document.getElementById('assessmentScoreSummary');
        if (summaryEl) {
          summaryEl.innerHTML = `Score: <span style="color: ${result.status === 'Passed' ? 'var(--status-success)' : 'var(--status-danger)'};">${result.earnedPoints} / ${result.totalPoints} (${result.percentage}%) - [${result.status}]</span>`;
        }

        ViewUtils.showToast(`Assessment Evaluated: ${result.percentage}% (${result.status})`);
      });
    }

    const deleteBtns = this.contentContainer.querySelectorAll('.delete-question-btn');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (confirm(`Confirm deletion of question [${id}]?`)) {
          this.questionModel.delete(id);
          ViewUtils.showToast(`Question [${id}] deleted`);
          this.renderCurrentView();
        }
      });
    });
  }
}

window.AppController = AppController;
