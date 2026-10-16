/**
 * Model: FinanceModel
 * Responsibility: Manages IT Invoices, Client Billing Calculations, Retainers, and Financial Analytics.
 * Architecture: MVC - Model Layer (Zero Emojis)
 */

class FinanceModel {
  constructor() {
    this.storageKey = 'it_finance_data';
    this.invoices = this.loadInitialData();
  }

  loadInitialData() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [
      { id: 'INV-2026-001', client: 'Apex Financial Group', project: 'Core Banking API Modernization', hoursLogged: 120, rate: 150, discountPct: 5, taxRate: 10, total: 18810, status: 'Paid', date: '2026-08-15' },
      { id: 'INV-2026-002', client: 'Global Logistics Corp', project: 'Enterprise Cloud Infrastructure Migration', hoursLogged: 180, rate: 160, discountPct: 0, taxRate: 10, total: 31680, status: 'Pending', date: '2026-09-01' },
      { id: 'INV-2026-003', client: 'SecureVault Inc', project: 'Zero-Trust Identity Provider Rollout', hoursLogged: 80, rate: 175, discountPct: 10, taxRate: 10, total: 13860, status: 'Paid', date: '2026-08-28' }
    ];
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.invoices));
  }

  getAll() {
    return [...this.invoices];
  }

  calculateInvoice(hoursLogged, rate, discountPct = 0, taxRate = 10) {
    const subtotal = hoursLogged * rate;
    const discountAmount = subtotal * (discountPct / 100);
    const discountedSubtotal = subtotal - discountAmount;
    const taxAmount = discountedSubtotal * (taxRate / 100);
    const total = discountedSubtotal + taxAmount;

    return {
      subtotal,
      discountAmount,
      discountedSubtotal,
      taxAmount,
      total
    };
  }

  createInvoice(invoiceData) {
    const calc = this.calculateInvoice(
      invoiceData.hoursLogged,
      invoiceData.rate,
      invoiceData.discountPct || 0,
      invoiceData.taxRate || 10
    );

    const newInvoice = {
      id: `INV-2026-00${this.invoices.length + 1}`,
      client: invoiceData.client.trim(),
      project: invoiceData.project.trim(),
      hoursLogged: parseFloat(invoiceData.hoursLogged),
      rate: parseFloat(invoiceData.rate),
      discountPct: parseFloat(invoiceData.discountPct || 0),
      taxRate: parseFloat(invoiceData.taxRate || 10),
      total: calc.total,
      status: invoiceData.status || 'Pending',
      date: new Date().toISOString().split('T')[0]
    };

    this.invoices.unshift(newInvoice);
    this.save();
    return newInvoice;
  }

  getTotalRevenue() {
    return this.invoices.reduce((sum, inv) => sum + (inv.status === 'Paid' ? inv.total : 0), 0);
  }

  getPendingRevenue() {
    return this.invoices.reduce((sum, inv) => sum + (inv.status === 'Pending' ? inv.total : 0), 0);
  }
}

window.FinanceModel = FinanceModel;
