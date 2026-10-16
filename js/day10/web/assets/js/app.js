/**
 * Application Entry Point: app.js
 * Responsibility: Bootstrap MVC Enterprise Architecture.
 * Architecture: MVC - Application Root (Strictly Zero Emojis)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Instantiate Master MVC Controller
  window.app = new AppController();
  console.log('[System Boot] Enterprise IT Operations MVC Pipeline Initialized Successfully.');
});
