/**
 * Model: ProjectModel
 * Responsibility: Manages IT Client Projects, Sprints, Budgets, and Milestones.
 * Architecture: MVC - Model Layer (Zero Emojis)
 */

class ProjectModel {
  constructor() {
    this.storageKey = 'it_projects_data';
    this.projects = this.loadInitialData();
  }

  loadInitialData() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [
      { id: 'PRJ-101', code: 'NEXUS-V2', title: 'Core Banking API Modernization', client: 'Apex Financial Group', lead: 'Sophia Chen', budget: 145000, loggedHours: 420, progress: 78, status: 'In Progress', deadline: '2026-11-30' },
      { id: 'PRJ-102', code: 'CLOUD-MIG', title: 'Enterprise Cloud Infrastructure Migration', client: 'Global Logistics Corp', lead: 'Marcus Vance', budget: 210000, loggedHours: 650, progress: 92, status: 'In Progress', deadline: '2026-10-15' },
      { id: 'PRJ-103', code: 'DEV-PORTAL', title: 'Internal Developer Platform & CI/CD', client: 'Internal Enterprise', lead: 'Sakthi Subramanian', budget: 85000, loggedHours: 290, progress: 60, status: 'In Progress', deadline: '2026-12-15' },
      { id: 'PRJ-104', code: 'AUTH-SEC', title: 'Zero-Trust Identity Provider Rollout', client: 'SecureVault Inc', lead: 'Elena Rostova', budget: 95000, loggedHours: 510, progress: 100, status: 'Completed', deadline: '2026-08-30' }
    ];
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.projects));
  }

  getAll() {
    return [...this.projects];
  }

  getById(id) {
    return this.projects.find(p => p.id === id);
  }

  add(projectData) {
    const newProject = {
      id: `PRJ-${Math.floor(100 + Math.random() * 900)}`,
      code: projectData.code.trim().toUpperCase(),
      title: projectData.title.trim(),
      client: projectData.client.trim(),
      lead: projectData.lead,
      budget: parseFloat(projectData.budget) || 50000,
      loggedHours: parseInt(projectData.loggedHours, 10) || 0,
      progress: Math.min(Math.max(parseInt(projectData.progress, 10) || 0, 0), 100),
      status: projectData.status || 'Planning',
      deadline: projectData.deadline || '2026-12-31'
    };

    this.projects.push(newProject);
    this.save();
    return newProject;
  }

  updateProgress(id, progress) {
    const project = this.getById(id);
    if (project) {
      project.progress = Math.min(Math.max(progress, 0), 100);
      if (project.progress === 100) project.status = 'Completed';
      this.save();
      return project;
    }
    return null;
  }

  delete(id) {
    this.projects = this.projects.filter(p => p.id !== id);
    this.save();
    return true;
  }

  getTotalBudget() {
    return this.projects.reduce((sum, p) => sum + p.budget, 0);
  }
}

window.ProjectModel = ProjectModel;
