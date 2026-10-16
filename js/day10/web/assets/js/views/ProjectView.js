/**
 * View: ProjectView
 * Responsibility: Renders Enterprise Project Sprints, Budgets, and Work Breakdown Structure.
 * Architecture: MVC - View Layer (Strictly Zero Emojis)
 */

class ProjectView {
  constructor(containerElement) {
    this.container = containerElement;
  }

  render(projects) {
    this.container.innerHTML = `
      <div class="panel-card">
        <div class="panel-card-header">
          <div class="panel-card-title">Enterprise Project Portfolio & Sprint Tracker</div>
          <button class="btn btn-primary btn-sm" id="toggleAddProjectFormBtn">
            ${ViewUtils.icons.plus} Create New Project
          </button>
        </div>

        <!-- Add Project Form (Collapsible) -->
        <div id="addProjectFormContainer" style="display: none; padding: 1.5rem; border-bottom: 1px solid var(--border-color); background: var(--bg-surface-subtle);">
          <h4 style="margin-bottom: 1rem; font-size: 0.95rem; font-weight: 700;">Initiate Project Charter</h4>
          <form id="newProjectForm">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">Project Code</label>
                <input type="text" id="prjCodeInput" class="form-input" placeholder="e.g. DATA-PIPELINE" required>
              </div>
              <div class="form-group">
                <label class="form-label">Project Title</label>
                <input type="text" id="prjTitleInput" class="form-input" placeholder="e.g. Distributed Event Stream Architecture" required>
              </div>
              <div class="form-group">
                <label class="form-label">Client Organization</label>
                <input type="text" id="prjClientInput" class="form-input" placeholder="e.g. Vertex Systems" required>
              </div>
              <div class="form-group">
                <label class="form-label">Lead Architect</label>
                <input type="text" id="prjLeadInput" class="form-input" placeholder="e.g. Sakthi Subramanian" required>
              </div>
              <div class="form-group">
                <label class="form-label">Allocated Budget (USD)</label>
                <input type="number" id="prjBudgetInput" class="form-input" value="120000" min="10000" required>
              </div>
              <div class="form-group">
                <label class="form-label">Target Completion Date</label>
                <input type="date" id="prjDeadlineInput" class="form-input" value="2026-12-31" required>
              </div>
            </div>
            <div style="display: flex; gap: 0.75rem;">
              <button type="submit" class="btn btn-primary btn-sm">Create Project</button>
              <button type="button" class="btn btn-secondary btn-sm" id="cancelAddProjectBtn">Cancel</button>
            </div>
          </form>
        </div>

        <div class="panel-card-body data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Project Details</th>
                <th>Client</th>
                <th>Lead Architect</th>
                <th>Budget Allocation</th>
                <th>Milestone Progress</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${projects.map(prj => `
                <tr>
                  <td><code>${prj.code}</code></td>
                  <td>
                    <strong>${ViewUtils.escapeHTML(prj.title)}</strong>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">Deadline: ${prj.deadline} | Logged: ${prj.loggedHours}h</div>
                  </td>
                  <td>${ViewUtils.escapeHTML(prj.client)}</td>
                  <td>${ViewUtils.escapeHTML(prj.lead)}</td>
                  <td><strong>${ViewUtils.formatCurrency(prj.budget)}</strong></td>
                  <td style="min-width: 140px;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                      <div style="flex: 1; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                        <div style="width: ${prj.progress}%; height: 100%; background: ${prj.progress === 100 ? 'var(--status-success)' : 'var(--brand-primary)'};"></div>
                      </div>
                      <span style="font-size: 0.75rem; font-family: var(--font-mono);">${prj.progress}%</span>
                    </div>
                  </td>
                  <td>${ViewUtils.formatBadge(prj.status)}</td>
                  <td>
                    <div style="display: flex; gap: 0.35rem;">
                      <button class="btn btn-secondary btn-sm update-prj-btn" data-id="${prj.id}" title="Advance Progress (+10%)">
                        +10%
                      </button>
                      <button class="btn btn-danger btn-sm delete-prj-btn" data-id="${prj.id}" title="Delete Project">
                        ${ViewUtils.icons.trash}
                      </button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}

window.ProjectView = ProjectView;
