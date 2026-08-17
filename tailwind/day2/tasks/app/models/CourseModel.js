/**
 * ENTERPRISE IT MVC PLATFORM - COURSE MODEL
 * Manages curriculum schema, module queries, and metadata retrieval.
 */

class CourseModel {
  constructor(curriculumData) {
    this.data = curriculumData || window.CURRICULUM_DATA || {};
  }

  getModules() {
    return this.data.modules || [];
  }

  getModuleById(id) {
    return (this.data.modules || []).find(m => m.id === id || m.slug === id);
  }

  getModulesByCategory(category) {
    if (!category || category === 'all') return this.getModules();
    return (this.data.modules || []).filter(m => m.category === category);
  }

  getExamSummary() {
    return this.data.examSummary || {};
  }

  getQuizBank() {
    return this.data.quizBank || [];
  }

  searchModules(query) {
    if (!query) return this.getModules();
    const q = query.toLowerCase().trim();
    return (this.data.modules || []).filter(m => 
      m.title.toLowerCase().includes(q) ||
      m.summary.toLowerCase().includes(q) ||
      (m.topics && m.topics.some(t => t.toLowerCase().includes(q)))
    );
  }
}

// Export for ES and browser global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CourseModel;
} else {
  window.CourseModel = CourseModel;
}
