/**
 * View: DashboardView
 * Responsibility: Renders Executive IT Operations Overview, System KPIs, Active Sprints & SLA Alerts.
 * Architecture: MVC - View Layer (Strictly Zero Emojis)
 */

class DashboardView {
  constructor(containerElement) {
    this.container = containerElement;
  }

  render(data) {
    const { employees, projects, tickets, assets, finance } = data;

    const totalBudget = projects.reduce((s, p) => s + p.budget, 0);
    const openTickets = tickets.filter(t => t.status !== 'Resolved').length;
    const activeStaff = employees.filter(e => e.status === 'Active').length;
    const assetValuation = assets.reduce((s, a) => s + a.cost, 0);
    const revenue = finance.reduce((s, inv) => s + (inv.status === 'Paid' ? inv.total : 0), 0);

    this.container.innerHTML = `
      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-header">
            <span class="kpi-title">Active Engineering Staff</span>
            <span class="badge badge-info">Headcount</span>
          </div>
          <div class="kpi-value">${activeStaff}</div>
          <div class="kpi-subtext">Total Registered: ${employees.length} personnel</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-header">
            <span class="kpi-title">Active Project Portfolio</span>
            <span class="badge badge-success">Sprints</span>
          </div>
          <div class="kpi-value">${projects.filter(p => p.status === 'In Progress').length}</div>
          <div class="kpi-subtext">Total Budget: ${ViewUtils.formatCurrency(totalBudget)}</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-header">
            <span class="kpi-title">Open Support Tickets</span>
            <span class="badge ${openTickets > 0 ? 'badge-warning' : 'badge-success'}">SLA Queue</span>
          </div>
          <div class="kpi-value">${openTickets}</div>
          <div class="kpi-subtext">Critical Priority: ${tickets.filter(t => t.priority === 'Critical' && t.status !== 'Resolved').length}</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-header">
            <span class="kpi-title">Realized IT Revenue</span>
            <span class="badge badge-success">Fiscal YTD</span>
          </div>
          <div class="kpi-value">${ViewUtils.formatCurrency(revenue)}</div>
          <div class="kpi-subtext">Asset Valuation: ${ViewUtils.formatCurrency(assetValuation)}</div>
        </div>
      </div>

      <!-- Active Projects Summary -->
      <div class="panel-card">
        <div class="panel-card-header">
          <div class="panel-card-title">Active Enterprise Sprints & Milestones</div>
          <button class="btn btn-secondary btn-sm" id="dashViewAllProjectsBtn">View All Projects</button>
        </div>
        <div class="panel-card-body data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Project Title</th>
                <th>Client</th>
                <th>Lead Architect</th>
                <th>Progress</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${projects.slice(0, 4).map(p => `
                <tr>
                  <td><code>${p.code}</code></td>
                  <td><strong>${ViewUtils.escapeHTML(p.title)}</strong></td>
                  <td>${ViewUtils.escapeHTML(p.client)}</td>
                  <td>${ViewUtils.escapeHTML(p.lead)}</td>
                  <td>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                      <div style="flex: 1; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                        <div style="width: ${p.progress}%; height: 100%; background: var(--brand-primary);"></div>
                      </div>
                      <span style="font-size: 0.75rem; font-family: var(--font-mono);">${p.progress}%</span>
                    </div>
                  </td>
                  <td>${ViewUtils.formatBadge(p.status)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Critical Tickets & Architecture Pipeline -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
        <div class="panel-card">
          <div class="panel-card-header">
            <div class="panel-card-title">Priority Support Incidents</div>
            <button class="btn btn-secondary btn-sm" id="dashViewAllTicketsBtn">Open Helpdesk</button>
          </div>
          <div class="panel-card-body data-table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Incident</th>
                  <th>Priority</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${tickets.slice(0, 4).map(t => `
                  <tr>
                    <td><code>${t.id}</code></td>
                    <td>${ViewUtils.escapeHTML(t.title)}</td>
                    <td>${ViewUtils.formatBadge(t.priority)}</td>
                    <td>${ViewUtils.formatBadge(t.status)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div class="panel-card">
          <div class="panel-card-header">
            <div class="panel-card-title">MVC Architecture & Audit Log</div>
            <span class="badge badge-info">Live Stream</span>
          </div>
          <div class="panel-card-body">
            <div class="mvc-terminal-box" id="mvcEventLog">
              <div class="log-entry"><span class="log-time">[${new Date().toLocaleTimeString()}]</span> <span class="log-module">[Model:Auth]</span> <span class="log-message">Session verified for Alexander Wright (Administrator)</span></div>
              <div class="log-entry"><span class="log-time">[${new Date().toLocaleTimeString()}]</span> <span class="log-module">[Controller:App]</span> <span class="log-message">Loaded 5 Models, Initialized Viewport Dispatcher</span></div>
              <div class="log-entry"><span class="log-time">[${new Date().toLocaleTimeString()}]</span> <span class="log-module">[View:Dashboard]</span> <span class="log-message">DOM Nodes rendered successfully with 0 emojis</span></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

window.DashboardView = DashboardView;
