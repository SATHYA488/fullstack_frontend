/**
 * ENTERPRISE IT MVC PLATFORM - PROGRESS MODEL
 * Manages user progress, completed modules, bookmarking, and local storage state.
 */

class ProgressModel {
  constructor() {
    this.storageKey = 'enterprise_tech_progress_v2';
    this.state = this.loadState();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Unable to load progress from localStorage', e);
    }
    return {
      completedModules: [],
      bookmarks: [],
      quizScores: {},
      lastVisited: null,
      userName: 'Sakthi'
    };
  }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Unable to save progress to localStorage', e);
    }
  }

  isModuleCompleted(moduleId) {
    return this.state.completedModules.includes(moduleId);
  }

  toggleModuleCompletion(moduleId) {
    if (this.isModuleCompleted(moduleId)) {
      this.state.completedModules = this.state.completedModules.filter(id => id !== moduleId);
    } else {
      this.state.completedModules.push(moduleId);
    }
    this.saveState();
    return this.isModuleCompleted(moduleId);
  }

  getCompletionPercentage(totalModules = 7) {
    if (!totalModules) return 0;
    const completedCount = this.state.completedModules.length;
    return Math.min(100, Math.round((completedCount / totalModules) * 100));
  }

  recordQuizScore(quizId, score, total) {
    this.state.quizScores[quizId] = {
      score,
      total,
      percentage: Math.round((score / total) * 100),
      timestamp: new Date().toISOString()
    };
    this.saveState();
  }

  getLatestQuizScore(quizId = 'final-exam') {
    return this.state.quizScores[quizId] || null;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ProgressModel;
} else {
  window.ProgressModel = ProgressModel;
}
