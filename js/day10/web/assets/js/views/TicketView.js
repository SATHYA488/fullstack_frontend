/**
 * View: TicketView
 * Responsibility: Renders IT Helpdesk Support Queue, Incident Reports & Resolution Workflows.
 * Architecture: MVC - View Layer (Strictly Zero Emojis)
 */

class TicketView {
  constructor(containerElement) {
    this.container = containerElement;
  }

  render(tickets) {
    this.container.innerHTML = `
      <div class="panel-card">
        <div class="panel-card-header">
          <div class="panel-card-title">IT Helpdesk & Engineering Support Queue</div>
          <button class="btn btn-primary btn-sm" id="toggleAddTicketFormBtn">
            ${ViewUtils.icons.plus} Log Incident
          </button>
        </div>

        <!-- Add Ticket Form (Collapsible) -->
        <div id="addTicketFormContainer" style="display: none; padding: 1.5rem; border-bottom: 1px solid var(--border-color); background: var(--bg-surface-subtle);">
          <h4 style="margin-bottom: 1rem; font-size: 0.95rem; font-weight: 700;">Submit Incident / Service Request</h4>
          <form id="newTicketForm">
            <div class="form-grid">
              <div class="form-group" style="grid-column: span 2;">
                <label class="form-label">Incident Summary / Problem Statement</label>
                <input type="text" id="tckTitleInput" class="form-input" placeholder="e.g. SSL Handshake Termination Error on Prod Gateway" required>
              </div>
              <div class="form-group">
                <label class="form-label">Severity / Priority</label>
                <select id="tckPriorityInput" class="form-select">
                  <option value="Critical">Critical (P1)</option>
                  <option value="High">High (P2)</option>
                  <option value="Medium" selected>Medium (P3)</option>
                  <option value="Low">Low (P4)</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Owning Department</label>
                <select id="tckDeptInput" class="form-select">
                  <option value="DevOps & SRE">DevOps & SRE</option>
                  <option value="FullStack Engineering">FullStack Engineering</option>
                  <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                  <option value="IT Support">IT Support</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Assigned Engineer</label>
                <input type="text" id="tckAssigneeInput" class="form-input" placeholder="e.g. Marcus Vance" value="Unassigned">
              </div>
            </div>
            <div style="display: flex; gap: 0.75rem;">
              <button type="submit" class="btn btn-primary btn-sm">Submit Incident</button>
              <button type="button" class="btn btn-secondary btn-sm" id="cancelAddTicketBtn">Cancel</button>
            </div>
          </form>
        </div>

        <div class="panel-card-body data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Incident Details</th>
                <th>Priority</th>
                <th>Department</th>
                <th>Assignee</th>
                <th>Reported Date</th>
                <th>SLA Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${tickets.map(tck => `
                <tr>
                  <td><code>${tck.id}</code></td>
                  <td><strong>${ViewUtils.escapeHTML(tck.title)}</strong></td>
                  <td>${ViewUtils.formatBadge(tck.priority)}</td>
                  <td>${ViewUtils.escapeHTML(tck.department)}</td>
                  <td>${ViewUtils.escapeHTML(tck.assignee)}</td>
                  <td>${tck.reportedDate}</td>
                  <td>${ViewUtils.formatBadge(tck.status)}</td>
                  <td>
                    <div style="display: flex; gap: 0.35rem;">
                      ${tck.status !== 'Resolved' ? `
                        <button class="btn btn-secondary btn-sm resolve-ticket-btn" data-id="${tck.id}" title="Mark as Resolved">
                          ${ViewUtils.icons.check} Resolve
                        </button>
                      ` : `
                        <button class="btn btn-secondary btn-sm reopen-ticket-btn" data-id="${tck.id}" title="Reopen Ticket">
                          Reopen
                        </button>
                      `}
                      <button class="btn btn-danger btn-sm delete-ticket-btn" data-id="${tck.id}" title="Delete Ticket">
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

window.TicketView = TicketView;
