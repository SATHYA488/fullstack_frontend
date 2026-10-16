/**
 * View: QuestionView
 * Responsibility: Renders Technical Assessment Question Bank, Interactive Testing Arena, Scoring Summaries.
 * Architecture: MVC - View Layer (Strictly Zero Emojis)
 */

class QuestionView {
  constructor(containerElement) {
    this.container = containerElement;
  }

  render(questions, assessmentResult = null) {
    this.container.innerHTML = `
      <div class="panel-card">
        <div class="panel-card-header">
          <div>
            <div class="panel-card-title">Technical Assessment & Knowledge Bank</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">Available Assessment Items: ${questions.length} questions</div>
          </div>
          <button class="btn btn-primary btn-sm" id="toggleAddQuestionFormBtn">
            ${ViewUtils.icons.plus} Create Question
          </button>
        </div>

        <!-- Add Question Form (Collapsible) -->
        <div id="addQuestionFormContainer" style="display: none; padding: 1.5rem; border-bottom: 1px solid var(--border-color); background: var(--bg-surface-subtle);">
          <h4 style="margin-bottom: 1rem; font-size: 0.95rem; font-weight: 700;">Add New Assessment Question</h4>
          <form id="newQuestionForm">
            <div class="form-grid">
              <div class="form-group" style="grid-column: span 2;">
                <label class="form-label">Question Text</label>
                <input type="text" id="qstTextInput" class="form-input" placeholder="e.g. What is the difference between synchronous and asynchronous code execution?" required>
              </div>
              <div class="form-group">
                <label class="form-label">Category</label>
                <select id="qstCategoryInput" class="form-select">
                  <option value="Software Architecture">Software Architecture</option>
                  <option value="JavaScript Core">JavaScript Core</option>
                  <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                  <option value="DevOps & SRE">DevOps & SRE</option>
                  <option value="Security">Security</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Difficulty Level</label>
                <select id="qstDifficultyInput" class="form-select">
                  <option value="Easy">Easy</option>
                  <option value="Medium" selected>Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              <div class="form-group" style="grid-column: span 2;">
                <label class="form-label">Options (One option per line, exactly 4 lines)</label>
                <textarea id="qstOptionsInput" class="form-input" style="height: 90px; resize: vertical;" placeholder="Option A
Option B
Option C
Option D" required></textarea>
              </div>
              <div class="form-group">
                <label class="form-label">Correct Option Index (0 to 3)</label>
                <select id="qstCorrectIndexInput" class="form-select">
                  <option value="0">Option A (Line 1)</option>
                  <option value="1">Option B (Line 2)</option>
                  <option value="2">Option C (Line 3)</option>
                  <option value="3">Option D (Line 4)</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Points Awarded</label>
                <input type="number" id="qstPointsInput" class="form-input" value="10" min="5" max="50" required>
              </div>
              <div class="form-group" style="grid-column: span 2;">
                <label class="form-label">Technical Explanation</label>
                <input type="text" id="qstExplanationInput" class="form-input" placeholder="Detailed architectural or runtime rationale for the correct answer" required>
              </div>
            </div>
            <div style="display: flex; gap: 0.75rem;">
              <button type="submit" class="btn btn-primary btn-sm">Save Question</button>
              <button type="button" class="btn btn-secondary btn-sm" id="cancelAddQuestionBtn">Cancel</button>
            </div>
          </form>
        </div>

        <!-- Assessment Form & Interactive Question Items -->
        <div class="panel-card-body">
          <form id="assessmentSubmissionForm">
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
              ${questions.map((q, idx) => `
                <div class="question-block" style="background: var(--bg-surface-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1.25rem;" data-id="${q.id}">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
                    <div>
                      <span class="badge badge-info" style="margin-right: 0.35rem;">${ViewUtils.escapeHTML(q.category)}</span>
                      <span class="badge badge-neutral" style="margin-right: 0.35rem;">${q.difficulty}</span>
                      <span class="badge badge-neutral">${q.points} Points</span>
                    </div>
                    <button type="button" class="btn btn-danger btn-sm delete-question-btn" data-id="${q.id}" title="Delete Question">
                      ${ViewUtils.icons.trash}
                    </button>
                  </div>

                  <h3 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.85rem;">
                    ${idx + 1}. ${ViewUtils.escapeHTML(q.questionText)}
                  </h3>

                  <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 0.75rem;">
                    ${q.options.map((opt, optIdx) => `
                      <label style="display: flex; align-items: center; gap: 0.75rem; background: var(--bg-input); border: 1px solid var(--border-subtle); padding: 0.6rem 0.85rem; border-radius: var(--radius-xs); cursor: pointer; font-size: 0.88rem;">
                        <input type="radio" name="qst_${q.id}" value="${optIdx}">
                        <span>${ViewUtils.escapeHTML(opt)}</span>
                      </label>
                    `).join('')}
                  </div>

                  <div class="question-feedback" id="feedback_${q.id}" style="display: none; padding: 0.6rem 0.85rem; border-radius: var(--radius-xs); font-size: 0.82rem; margin-top: 0.5rem;"></div>
                </div>
              `).join('')}
            </div>

            <!-- Submit Assessment Button -->
            <div style="margin-top: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; border-top: 1px solid var(--border-color); padding-top: 1.25rem;">
              <button type="submit" class="btn btn-primary" id="evaluateAssessmentBtn">
                ${ViewUtils.icons.check} Submit & Evaluate Assessment
              </button>
              <div id="assessmentScoreSummary" style="font-size: 0.95rem; font-weight: 700; font-family: var(--font-mono);"></div>
            </div>
          </form>
        </div>
      </div>
    `;
  }
}

window.QuestionView = QuestionView;
