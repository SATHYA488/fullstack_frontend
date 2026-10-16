/**
 * Model: TicketModel
 * Responsibility: Manages IT Helpdesk & Bug Tracker Support Tickets.
 * Architecture: MVC - Model Layer (Zero Emojis)
 */

class TicketModel {
  constructor() {
    this.storageKey = 'it_tickets_data';
    this.tickets = this.loadInitialData();
  }

  loadInitialData() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [
      { id: 'TCK-401', title: 'Production Redis Cluster Latency Spike', priority: 'Critical', department: 'DevOps & SRE', assignee: 'Marcus Vance', status: 'Open', reportedDate: '2026-09-05' },
      { id: 'TCK-402', title: 'OAuth2 Token Refresh Lifecycle Failure', priority: 'High', department: 'FullStack Engineering', assignee: 'Sophia Chen', status: 'In Review', reportedDate: '2026-09-04' },
      { id: 'TCK-403', title: 'Kubernetes Ingress Controller SSL Renewal', priority: 'Medium', department: 'Cloud Infrastructure', assignee: 'Elena Rostova', status: 'Resolved', reportedDate: '2026-09-02' },
      { id: 'TCK-404', title: 'Employee VPN Access Provisioning Request', priority: 'Low', department: 'IT Support', assignee: 'David Kumar', status: 'Open', reportedDate: '2026-09-05' }
    ];
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tickets));
  }

  getAll() {
    return [...this.tickets];
  }

  add(ticketData) {
    const newTicket = {
      id: `TCK-${Math.floor(400 + Math.random() * 500)}`,
      title: ticketData.title.trim(),
      priority: ticketData.priority || 'Medium',
      department: ticketData.department || 'IT Infrastructure',
      assignee: ticketData.assignee || 'Unassigned',
      status: ticketData.status || 'Open',
      reportedDate: new Date().toISOString().split('T')[0]
    };

    this.tickets.unshift(newTicket);
    this.save();
    return newTicket;
  }

  updateStatus(id, newStatus) {
    const ticket = this.tickets.find(t => t.id === id);
    if (ticket) {
      ticket.status = newStatus;
      this.save();
      return ticket;
    }
    return null;
  }

  delete(id) {
    this.tickets = this.tickets.filter(t => t.id !== id);
    this.save();
    return true;
  }

  getOpenCount() {
    return this.tickets.filter(t => t.status !== 'Resolved').length;
  }

  getCriticalCount() {
    return this.tickets.filter(t => t.priority === 'Critical' && t.status !== 'Resolved').length;
  }
}

window.TicketModel = TicketModel;
