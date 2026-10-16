/**
 * View: EmployeeView
 * Responsibility: Renders Staff Directory, Skills breakdown, and Employee Management Forms.
 * Architecture: MVC - View Layer (Strictly Zero Emojis)
 */

class EmployeeView {
  constructor(containerElement) {
    this.container = containerElement;
  }

  render(employees) {
    this.container.innerHTML = `
      <div class="panel-card">
        <div class="panel-card-header">
          <div class="panel-card-title">Engineering Staff & Personnel Directory</div>
          <button class="btn btn-primary btn-sm" id="toggleAddEmpFormBtn">
            ${ViewUtils.icons.plus} Add Engineer
          </button>
        </div>

        <!-- Add Employee Form (Collapsible) -->
        <div id="addEmployeeFormContainer" style="display: none; padding: 1.5rem; border-bottom: 1px solid var(--border-color); background: var(--bg-surface-subtle);">
          <h4 style="margin-bottom: 1rem; font-size: 0.95rem; font-weight: 700;">Provision New Personnel Record</h4>
          <form id="newEmployeeForm">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" id="empNameInput" class="form-input" placeholder="e.g. Rachel Adams" required>
              </div>
              <div class="form-group">
                <label class="form-label">Corporate Email</label>
                <input type="email" id="empEmailInput" class="form-input" placeholder="rachel.a@techcorp.internal" required>
              </div>
              <div class="form-group">
                <label class="form-label">Department</label>
                <select id="empDeptInput" class="form-select">
                  <option value="FullStack Engineering">FullStack Engineering</option>
                  <option value="DevOps & SRE">DevOps & SRE</option>
                  <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                  <option value="Quality Assurance">Quality Assurance</option>
                  <option value="Software Architecture">Software Architecture</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Role Title</label>
                <input type="text" id="empRoleInput" class="form-input" placeholder="e.g. Senior Software Engineer" required>
              </div>
              <div class="form-group">
                <label class="form-label">Core Skills (Comma separated)</label>
                <input type="text" id="empSkillsInput" class="form-input" placeholder="JavaScript, Node.js, AWS" required>
              </div>
              <div class="form-group">
                <label class="form-label">Billable Hourly Rate (USD)</label>
                <input type="number" id="empRateInput" class="form-input" placeholder="90" min="40" max="250" value="95" required>
              </div>
            </div>
            <div style="display: flex; gap: 0.75rem;">
              <button type="submit" class="btn btn-primary btn-sm">Save Record</button>
              <button type="button" class="btn btn-secondary btn-sm" id="cancelAddEmpBtn">Cancel</button>
            </div>
          </form>
        </div>

        <!-- Table -->
        <div class="panel-card-body data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Employee Name</th>
                <th>Department</th>
                <th>Role</th>
                <th>Skillset</th>
                <th>Rate / Hr</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${employees.map(emp => `
                <tr>
                  <td><code>${emp.id}</code></td>
                  <td>
                    <strong>${ViewUtils.escapeHTML(emp.name)}</strong>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">${ViewUtils.escapeHTML(emp.email)}</div>
                  </td>
                  <td>${ViewUtils.escapeHTML(emp.department)}</td>
                  <td>${ViewUtils.escapeHTML(emp.role)}</td>
                  <td>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.25rem;">
                      ${emp.skills.map(s => `<span class="badge badge-neutral" style="font-size: 0.68rem;">${ViewUtils.escapeHTML(s)}</span>`).join('')}
                    </div>
                  </td>
                  <td><strong>${ViewUtils.formatCurrency(emp.hourlyRate)}/hr</strong></td>
                  <td>${ViewUtils.formatBadge(emp.status)}</td>
                  <td>
                    <button class="btn btn-danger btn-sm delete-emp-btn" data-id="${emp.id}" title="Remove Employee">
                      ${ViewUtils.icons.trash}
                    </button>
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

window.EmployeeView = EmployeeView;
