/**
 * ENTERPRISE IT MVC PLATFORM - ASSESSMENT CONTROLLER
 * Manages certification exam runner, scoring logic, and dynamic certificate generator.
 */

class AssessmentController {
  constructor(quizModel, progressModel, appController) {
    this.quizModel = quizModel;
    this.progressModel = progressModel;
    this.appController = appController;
  }

  init() {
    this.renderQuizQuestions();
    this.bindSubmitHandler();
    this.bindCertificateGenerator();
  }

  renderQuizQuestions() {
    const container = document.getElementById('quiz-questions-container');
    if (!container) return;

    const questions = this.quizModel.getQuestions();
    if (!questions || !questions.length) return;

    container.innerHTML = questions.map((item, qIdx) => `
      <div class="exam-flashcard mb-4" id="question-card-${qIdx}">
        <div class="d-flex align-items-start gap-3 mb-3">
          <span class="badge bg-primary text-white rounded-pill px-3 py-2 font-monospace">Q${qIdx + 1}</span>
          <h5 class="fw-bold mb-0 text-slate-900 dark:text-white" style="font-size: 1.05rem;">${item.question}</h5>
        </div>
        <div class="space-y-2 mt-3">
          ${item.options.map((opt, oIdx) => `
            <label class="d-flex align-items-center gap-3 p-3 rounded-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover-elevate cursor-pointer transition w-100 mb-2">
              <input type="radio" name="quiz_question_${qIdx}" value="${oIdx}" class="form-check-input mt-0 text-primary">
              <span class="text-sm text-slate-700 dark:text-slate-200 fw-medium">${opt}</span>
            </label>
          `).join('')}
        </div>
        <div id="feedback-${qIdx}" class="mt-3 p-3 rounded-3 d-none text-xs fw-medium"></div>
      </div>
    `).join('');
  }

  bindSubmitHandler() {
    const submitBtn = document.getElementById('submit-assessment-btn');
    const resultBox = document.getElementById('assessment-result-container');

    if (!submitBtn || !resultBox) return;

    submitBtn.addEventListener('click', () => {
      const questions = this.quizModel.getQuestions();
      let answeredCount = 0;

      questions.forEach((q, qIdx) => {
        const selected = document.querySelector(`input[name="quiz_question_${qIdx}"]:checked`);
        if (selected) {
          answeredCount++;
          this.quizModel.recordAnswer(qIdx, parseInt(selected.value, 10));
        }
      });

      if (answeredCount < questions.length) {
        this.appController.showToast('<i class="bi bi-exclamation-circle text-amber-400"></i> Please answer all questions before submitting.');
        return;
      }

      const result = this.quizModel.evaluateAnswers();
      this.progressModel.recordQuizScore('final-certification-exam', result.score, result.total);

      // Render Feedback for each question
      result.details.forEach(item => {
        const fb = document.getElementById(`feedback-${item.questionIndex}`);
        if (!fb) return;

        fb.classList.remove('d-none', 'alert-success', 'alert-danger');
        if (item.isCorrect) {
          fb.className = 'mt-3 p-3 rounded-3 alert alert-success d-block text-xs';
          fb.innerHTML = `<i class="bi bi-check-circle-fill text-success me-1"></i> <strong>Correct!</strong> ${item.explanation}`;
        } else {
          fb.className = 'mt-3 p-3 rounded-3 alert alert-danger d-block text-xs';
          fb.innerHTML = `<i class="bi bi-x-circle-fill text-danger me-1"></i> <strong>Incorrect.</strong> ${item.explanation}`;
        }
      });

      // Render Result Box
      resultBox.classList.remove('d-none');
      resultBox.innerHTML = `
        <div class="card border-0 shadow-lg ${result.passed ? 'bg-emerald-50 text-emerald-950 dark:bg-emerald-950/70 dark:text-emerald-200 border border-emerald-500' : 'bg-blue-50 text-blue-950 dark:bg-slate-800 dark:text-white border border-blue-300'} p-4 rounded-4 mb-4">
          <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
            <div>
              <div class="d-flex align-items-center gap-2 mb-1">
                <i class="bi ${result.passed ? 'bi-patch-check-fill text-emerald-500 text-2xl' : 'bi-award text-primary text-2xl'}"></i>
                <h4 class="fw-bold mb-0">${result.passed ? 'Congratulations! Assessment Passed' : 'Assessment Completed'}</h4>
              </div>
              <p class="mb-0 text-sm opacity-90">
                Score: <strong>${result.score} / ${result.total}</strong> (${result.percentage}%). Required passing grade is 75%.
              </p>
            </div>
            ${result.passed ? `
              <button id="view-certificate-btn" class="btn btn-success px-4 py-2.5 rounded-xl font-semibold shadow-md flex items-center gap-2" data-bs-toggle="modal" data-bs-target="#certificateModal">
                <i class="bi bi-file-earmark-pdf-fill"></i> View Certificate
              </button>
            ` : `
              <button onclick="location.reload()" class="btn btn-outline-primary px-4 py-2 rounded-xl font-semibold">
                <i class="bi bi-arrow-clockwise"></i> Retake Exam
              </button>
            `}
          </div>
        </div>
      `;

      if (result.passed) {
        this.updateCertificateDetails(result);
      }

      resultBox.scrollIntoView({ behavior: 'smooth' });
    });
  }

  updateCertificateDetails(result) {
    const certName = document.getElementById('cert-student-name');
    const certDate = document.getElementById('cert-issue-date');
    const certScore = document.getElementById('cert-score-display');
    const certId = document.getElementById('cert-verification-id');

    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const randomId = 'ETA-' + Math.random().toString(36).substring(2, 9).toUpperCase();

    if (certName) certName.textContent = this.progressModel.state.userName || 'Sakthi';
    if (certDate) certDate.textContent = today;
    if (certScore) certScore.textContent = `${result.percentage}% Grade`;
    if (certId) certId.textContent = randomId;
  }

  bindCertificateGenerator() {
    const printBtn = document.getElementById('print-certificate-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AssessmentController;
} else {
  window.AssessmentController = AssessmentController;
}
