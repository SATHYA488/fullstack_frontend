/**
 * View: FinanceView
 * Responsibility: Renders Client Invoicing, POS Billing Calculation Engine, and Financial Analytics.
 * Architecture: MVC - View Layer (Strictly Zero Emojis)
 */

class FinanceView {
  constructor(containerElement) {
    this.container = containerElement;
  }

  render(invoices) {
    const totalPaid = invoices.reduce((s, i) => s + (i.status === 'Paid' ? i.total : 0), 0);
    const totalPending = invoices.reduce((s, i) => s + (i.status === 'Pending' ? i.total : 0), 0);

    this.container.innerHTML = `
      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-header">
            <span class="kpi-title">Settled Invoiced Revenue</span>
            <span class="badge badge-success">Collected</span>
          </div>
          <div class="kpi-value">${ViewUtils.formatCurrency(totalPaid)}</div>
          <div class="kpi-subtext">Completed Client Billing</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-header">
            <span class="kpi-title">Outstanding Receivables</span>
            <span class="badge badge-warning">Pending</span>
          </div>
          <div class="kpi-value">${ViewUtils.formatCurrency(totalPending)}</div>
          <div class="kpi-subtext">Awaiting Client Settlement</div>
        </div>
      </div>

      <!-- Live POS Billing Calculator Widget -->
      <div class="panel-card">
        <div class="panel-card-header">
          <div class="panel-card-title">Client Billing & POS Calculation Engine</div>
          <span class="badge badge-info">Real-time Calculation</span>
        </div>
        <div class="panel-card-body">
          <form id="posBillingForm">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">Client Organization</label>
                <input type="text" id="billClientInput" class="form-input" value="Apex Financial Group" required>
              </div>
              <div class="form-group">
                <label class="form-label">Target Project / Scope</label>
                <input type="text" id="billProjectInput" class="form-input" value="Core Banking API Modernization" required>
              </div>
              <div class="form-group">
                <label class="form-label">Logged Billable Hours</label>
                <input type="number" id="billHoursInput" class="form-input" value="80" min="1" required>
              </div>
              <div class="form-group">
                <label class="form-label">Contract Hourly Rate (USD)</label>
                <input type="number" id="billRateInput" class="form-input" value="150" min="10" required>
              </div>
              <div class="form-group">
                <label class="form-label">Retainer Discount (%)</label>
                <input type="number" id="billDiscountInput" class="form-input" value="5" min="0" max="50">
              </div>
              <div class="form-group">
                <label class="form-label">Tax / GST Rate (%)</label>
                <input type="number" id="billTaxInput" class="form-input" value="10" min="0" max="30">
              </div>
            </div>

            <!-- Live Receipt Summary -->
            <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1.25rem; margin-top: 1rem;">
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
                <div>
                  <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Gross Subtotal</div>
                  <div id="posCalcSubtotal" style="font-size: 1.15rem; font-weight: 700;">$12,000.00</div>
                </div>
                <div>
                  <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Discount Deduction</div>
                  <div id="posCalcDiscount" style="font-size: 1.15rem; font-weight: 700; color: var(--status-success);">-$600.00</div>
                </div>
                <div>
                  <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Tax / GST (10%)</div>
                  <div id="posCalcTax" style="font-size: 1.15rem; font-weight: 700;">+$1,140.00</div>
                </div>
                <div>
                  <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Net Payable Total</div>
                  <div id="posCalcTotal" style="font-size: 1.35rem; font-weight: 800; color: var(--brand-accent);">$12,540.00</div>
                </div>
              </div>
            </div>

            <div style="margin-top: 1.25rem;">
              <button type="submit" class="btn btn-primary btn-sm">Generate & Record Invoice</button>
            </div>
          </form>
        </div>
      </div>

      <!-- Invoices Table -->
      <div class="panel-card">
        <div class="panel-card-header">
          <div class="panel-card-title">Commercial Client Invoices Ledger</div>
        </div>
        <div class="panel-card-body data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Invoice Ref</th>
                <th>Client Organization</th>
                <th>Project Scope</th>
                <th>Hours</th>
                <th>Rate</th>
                <th>Total Invoiced</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${invoices.map(inv => `
                <tr>
                  <td><code>${inv.id}</code></td>
                  <td><strong>${ViewUtils.escapeHTML(inv.client)}</strong></td>
                  <td>${ViewUtils.escapeHTML(inv.project)}</td>
                  <td>${inv.hoursLogged}h</td>
                  <td>${ViewUtils.formatCurrency(inv.rate)}/hr</td>
                  <td><strong>${ViewUtils.formatCurrency(inv.total)}</strong></td>
                  <td>${inv.date}</td>
                  <td>${ViewUtils.formatBadge(inv.status)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}

window.FinanceView = FinanceView;
