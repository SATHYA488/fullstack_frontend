/**
 * Model: ArticleModel
 * Responsibility: Manages IT Knowledge Base Articles, Technical Documentation, Categories, and Engagement.
 * Architecture: MVC - Model Layer (Strictly Zero Emojis)
 */

class ArticleModel {
  constructor() {
    this.storageKey = 'it_articles_data';
    this.articles = this.loadInitialData();
  }

  loadInitialData() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [
      {
        id: 'ART-101',
        title: 'Architectural Implementation of MVC Pattern in Vanilla JavaScript',
        category: 'Software Architecture',
        author: 'Alexander Wright',
        summary: 'A deep dive into separating concerns between Model data layer, View renderers, and Controller event coordinators.',
        content: 'The Model-View-Controller (MVC) architectural pattern decomposes an application into three interconnected parts: Model manages application state and persistence, View renders the presentation to the user, and Controller handles incoming input and translates it into model updates.',
        tags: ['JavaScript', 'MVC', 'Architecture', 'Design Patterns'],
        readTimeMinutes: 8,
        publishedDate: '2026-09-01',
        views: 342,
        likes: 48,
        status: 'Published'
      },
      {
        id: 'ART-102',
        title: 'High-Throughput Asynchronous Task Queues and Event Loop Mechanics',
        category: 'FullStack Engineering',
        author: 'Sophia Chen',
        summary: 'Understanding microtasks, macrotasks, Promises, and non-blocking I/O execution in modern JavaScript runtimes.',
        content: 'JavaScript utilizes a single-threaded event loop model backed by a call stack, a task queue (macrotasks), and a job queue (microtasks). Microtasks like Promise callbacks take precedence over timer macrotasks on each tick.',
        tags: ['Async', 'EventLoop', 'Promises', 'Performance'],
        readTimeMinutes: 12,
        publishedDate: '2026-08-28',
        views: 520,
        likes: 91,
        status: 'Published'
      },
      {
        id: 'ART-103',
        title: 'Zero-Trust Infrastructure and Cloud Service Mesh Orchestration',
        category: 'Cloud Infrastructure',
        author: 'Marcus Vance',
        summary: 'Securing microservice communication with mutual TLS and decentralized identity access control.',
        content: 'Zero-trust security assumes network locality is not sufficient for trust. Every API call between microservices must authenticate and authorize using cryptographic identity tokens (mTLS, SPIFFE/SPIRE).',
        tags: ['DevOps', 'Security', 'Kubernetes', 'Cloud'],
        readTimeMinutes: 10,
        publishedDate: '2026-09-03',
        views: 280,
        likes: 35,
        status: 'Published'
      }
    ];
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.articles));
  }

  getAll() {
    return [...this.articles];
  }

  getById(id) {
    return this.articles.find(a => a.id === id);
  }

  getByCategory(category) {
    return this.articles.filter(a => a.category.toLowerCase() === category.toLowerCase());
  }

  getByTag(tag) {
    return this.articles.filter(a => a.tags.some(t => t.toLowerCase() === tag.toLowerCase()));
  }

  search(query) {
    const q = query.toLowerCase().trim();
    return this.articles.filter(a => 
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.author.toLowerCase().includes(q) ||
      a.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  add(articleData) {
    const newArticle = {
      id: `ART-${Math.floor(100 + Math.random() * 900)}`,
      title: articleData.title.trim(),
      category: articleData.category || 'General IT',
      author: articleData.author.trim() || 'Staff Author',
      summary: articleData.summary.trim(),
      content: articleData.content.trim(),
      tags: Array.isArray(articleData.tags) 
        ? articleData.tags 
        : articleData.tags.split(',').map(t => t.trim()),
      readTimeMinutes: parseInt(articleData.readTimeMinutes, 10) || 5,
      publishedDate: new Date().toISOString().split('T')[0],
      views: 0,
      likes: 0,
      status: articleData.status || 'Published'
    };

    this.articles.unshift(newArticle);
    this.save();
    return newArticle;
  }

  update(id, updatedFields) {
    const index = this.articles.findIndex(a => a.id === id);
    if (index !== -1) {
      this.articles[index] = { ...this.articles[index], ...updatedFields };
      this.save();
      return this.articles[index];
    }
    return null;
  }

  delete(id) {
    this.articles = this.articles.filter(a => a.id !== id);
    this.save();
    return true;
  }

  incrementViews(id) {
    const article = this.getById(id);
    if (article) {
      article.views += 1;
      this.save();
      return article.views;
    }
    return 0;
  }

  likeArticle(id) {
    const article = this.getById(id);
    if (article) {
      article.likes += 1;
      this.save();
      return article.likes;
    }
    return 0;
  }

  getTotalViews() {
    return this.articles.reduce((sum, a) => sum + a.views, 0);
  }

  getCategories() {
    return [...new Set(this.articles.map(a => a.category))];
  }
}

window.ArticleModel = ArticleModel;
