/**
 * View: AssetView
 * Responsibility: Renders IT Infrastructure, Cloud Nodes, Server Hardware & Inventory.
 * Architecture: MVC - View Layer (Strictly Zero Emojis)
 */

class AssetView {
  constructor(containerElement) {
    this.container = containerElement;
  }

  render(assets) {
    const totalValuation = assets.reduce((s, a) => s + a.cost, 0);

    this.container.innerHTML = `
      <div class="panel-card">
        <div class="panel-card-header">
          <div>
            <div class="panel-card-title">Enterprise Infrastructure & Hardware Assets</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">Total Inventory Asset Valuation: ${ViewUtils.formatCurrency(totalValuation)}</div>
          </div>
          <button class="btn btn-primary btn-sm" id="toggleAddAssetFormBtn">
            ${ViewUtils.icons.plus} Provision Asset
          </button>
        </div>

        <!-- Add Asset Form (Collapsible) -->
        <div id="addAssetFormContainer" style="display: none; padding: 1.5rem; border-bottom: 1px solid var(--border-color); background: var(--bg-surface-subtle);">
          <h4 style="margin-bottom: 1rem; font-size: 0.95rem; font-weight: 700;">Register Hardware / Cloud Asset</h4>
          <form id="newAssetForm">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">Asset Name / Hardware Model</label>
                <input type="text" id="astNameInput" class="form-input" placeholder="e.g. HP ProLiant DL380 Gen10" required>
              </div>
              <div class="form-group">
                <label class="form-label">Asset Classification</label>
                <select id="astTypeInput" class="form-select">
                  <option value="Server">Server</option>
                  <option value="Workstation">Workstation / Laptop</option>
                  <option value="Cloud Instance">Cloud Instance (AWS/GCP)</option>
                  <option value="Network">Network Hardware / Switch</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Serial / Asset Tag</label>
                <input type="text" id="astSerialInput" class="form-input" placeholder="SRV-DL-8831" required>
              </div>
              <div class="form-group">
                <label class="form-label">Assigned Location / Personnel</label>
                <input type="text" id="astAssigneeInput" class="form-input" placeholder="e.g. Primary DC-East" required>
              </div>
              <div class="form-group">
                <label class="form-label">Unit Capital Cost (USD)</label>
                <input type="number" id="astCostInput" class="form-input" value="4500" min="100" required>
              </div>
            </div>
            <div style="display: flex; gap: 0.75rem;">
              <button type="submit" class="btn btn-primary btn-sm">Provision Asset</button>
              <button type="button" class="btn btn-secondary btn-sm" id="cancelAddAssetBtn">Cancel</button>
            </div>
          </form>
        </div>

        <div class="panel-card-body data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Asset Tag</th>
                <th>Hardware / Cloud Asset</th>
                <th>Classification</th>
                <th>Assigned Target</th>
                <th>Valuation Cost</th>
                <th>Operational State</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${assets.map(ast => `
                <tr>
                  <td><code>${ast.serial}</code></td>
                  <td><strong>${ViewUtils.escapeHTML(ast.name)}</strong></td>
                  <td>${ViewUtils.escapeHTML(ast.type)}</td>
                  <td>${ViewUtils.escapeHTML(ast.assignedTo)}</td>
                  <td><strong>${ViewUtils.formatCurrency(ast.cost)}</strong></td>
                  <td>${ViewUtils.formatBadge(ast.status)}</td>
                  <td>
                    <button class="btn btn-danger btn-sm delete-asset-btn" data-id="${ast.id}" title="Retire Asset">
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

window.AssetView = AssetView;
