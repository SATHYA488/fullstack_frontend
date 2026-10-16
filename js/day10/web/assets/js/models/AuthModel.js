/**
 * Model: AuthModel
 * Responsibility: Handles user authentication, session tokens, and role permissions.
 * Architecture: MVC - Model Layer (Zero Emojis)
 */

class AuthModel {
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('it_current_user')) || {
      id: 'USR-1001',
      name: 'Alexander Wright',
      email: 'alex.wright@techcorp.internal',
      role: 'Administrator',
      department: 'IT Infrastructure',
      token: 'SEC_AUTH_TOKEN_78912'
    };

    this.registeredUsers = [
      { id: 'USR-1001', username: 'admin', password: 'password123', name: 'Alexander Wright', role: 'Administrator', email: 'alex.wright@techcorp.internal' },
      { id: 'USR-1002', username: 'dev_lead', password: 'password123', name: 'Sophia Chen', role: 'Engineering Lead', email: 'sophia.chen@techcorp.internal' },
      { id: 'USR-1003', username: 'devops', password: 'password123', name: 'Marcus Vance', role: 'DevOps Specialist', email: 'marcus.vance@techcorp.internal' }
    ];
  }

  getCurrentUser() {
    return this.currentUser;
  }

  isAuthenticated() {
    return !!this.currentUser && !!this.currentUser.token;
  }

  hasRole(requiredRole) {
    if (!this.currentUser) return false;
    if (this.currentUser.role === 'Administrator') return true;
    return this.currentUser.role === requiredRole;
  }

  login(username, password) {
    const user = this.registeredUsers.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: `AUTH_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      };
      localStorage.setItem('it_current_user', JSON.stringify(this.currentUser));
      return { success: true, message: 'Authentication successful', user: this.currentUser };
    }
    return { success: false, message: 'Authentication failed: Invalid credentials' };
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('it_current_user');
    return { success: true, message: 'Session terminated' };
  }
}

window.AuthModel = AuthModel;
