/**
 * View: ArticleView
 * Responsibility: Renders Knowledge Base Articles, Technical Documentation, and Publishing Form.
 * Architecture: MVC - View Layer (Strictly Zero Emojis)
 */

class ArticleView {
  constructor(containerElement) {
    this.container = containerElement;
  }

  render(articles) {
    this.container.innerHTML = `
      <div class="panel-card">
        <div class="panel-card-header">
          <div>
            <div class="panel-card-title">Technical Knowledge Base & Architecture Articles</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">Published Documentation Records: ${articles.length} articles</div>
          </div>
          <button class="btn btn-primary btn-sm" id="toggleAddArticleFormBtn">
            ${ViewUtils.icons.plus} Publish Article
          </button>
        </div>

        <!-- Add Article Form (Collapsible) -->
        <div id="addArticleFormContainer" style="display: none; padding: 1.5rem; border-bottom: 1px solid var(--border-color); background: var(--bg-surface-subtle);">
          <h4 style="margin-bottom: 1rem; font-size: 0.95rem; font-weight: 700;">Draft New Technical Article</h4>
          <form id="newArticleForm">
            <div class="form-grid">
              <div class="form-group" style="grid-column: span 2;">
                <label class="form-label">Article Title</label>
                <input type="text" id="artTitleInput" class="form-input" placeholder="e.g. Distributed Database Sharding and Consistency Models" required>
              </div>
              <div class="form-group">
                <label class="form-label">Category</label>
                <select id="artCategoryInput" class="form-select">
                  <option value="Software Architecture">Software Architecture</option>
                  <option value="FullStack Engineering">FullStack Engineering</option>
                  <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                  <option value="DevOps & SRE">DevOps & SRE</option>
                  <option value="Security & Compliance">Security & Compliance</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Author Name</label>
                <input type="text" id="artAuthorInput" class="form-input" placeholder="e.g. Alexander Wright" required>
              </div>
              <div class="form-group" style="grid-column: span 2;">
                <label class="form-label">Executive Summary</label>
                <input type="text" id="artSummaryInput" class="form-input" placeholder="Brief 1-2 sentence overview of the technical topic" required>
              </div>
              <div class="form-group" style="grid-column: span 2;">
                <label class="form-label">Full Technical Content</label>
                <textarea id="artContentInput" class="form-input" style="height: 110px; resize: vertical;" placeholder="Detailed technical documentation, architectural patterns, and code practices..." required></textarea>
              </div>
              <div class="form-group">
                <label class="form-label">Tags (Comma separated)</label>
                <input type="text" id="artTagsInput" class="form-input" placeholder="Database, SQL, Scaling" required>
              </div>
              <div class="form-group">
                <label class="form-label">Estimated Read Time (Minutes)</label>
                <input type="number" id="artReadTimeInput" class="form-input" value="6" min="1" max="60" required>
              </div>
            </div>
            <div style="display: flex; gap: 0.75rem;">
              <button type="submit" class="btn btn-primary btn-sm">Save & Publish</button>
              <button type="button" class="btn btn-secondary btn-sm" id="cancelAddArticleBtn">Cancel</button>
            </div>
          </form>
        </div>

        <!-- Articles Grid / List -->
        <div class="panel-card-body" style="display: flex; flex-direction: column; gap: 1.25rem;">
          ${articles.map(art => `
            <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1.25rem;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                <div>
                  <span class="badge badge-info" style="margin-bottom: 0.4rem;">${ViewUtils.escapeHTML(art.category)}</span>
                  <h3 style="font-size: 1.1rem; font-weight: 700;">${ViewUtils.escapeHTML(art.title)}</h3>
                </div>
                <div style="display: flex; gap: 0.35rem;">
                  <button class="btn btn-secondary btn-sm like-article-btn" data-id="${art.id}">
                    Like (${art.likes})
                  </button>
                  <button class="btn btn-danger btn-sm delete-article-btn" data-id="${art.id}" title="Delete Article">
                    ${ViewUtils.icons.trash}
                  </button>
                </div>
              </div>

              <p style="color: var(--text-secondary); font-size: 0.88rem; margin-bottom: 0.75rem;">
                ${ViewUtils.escapeHTML(art.summary)}
              </p>

              <div style="background: var(--bg-input); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 0.85rem; font-size: 0.84rem; color: var(--text-primary); margin-bottom: 0.75rem; line-height: 1.6;">
                ${ViewUtils.escapeHTML(art.content)}
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; font-size: 0.78rem; color: var(--text-muted);">
                <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
                  ${art.tags.map(t => `<span class="badge badge-neutral">${ViewUtils.escapeHTML(t)}</span>`).join('')}
                </div>
                <div>
                  Author: <strong>${ViewUtils.escapeHTML(art.author)}</strong> | Date: ${art.publishedDate} | Read Time: ${art.readTimeMinutes} min | Views: ${art.views}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

window.ArticleView = ArticleView;
