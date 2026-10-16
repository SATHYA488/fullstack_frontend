/**
 * Model: AssetModel
 * Responsibility: Tracks IT Physical & Cloud Hardware Assets, Servers, and Workstations.
 * Architecture: MVC - Model Layer (Zero Emojis)
 */

class AssetModel {
  constructor() {
    this.storageKey = 'it_assets_data';
    this.assets = this.loadInitialData();
  }

  loadInitialData() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [
      { id: 'AST-801', name: 'Dell PowerEdge R750 Rack Server', type: 'Server', serial: 'SRV-DL-9921', assignedTo: 'Primary DC-East', status: 'Operational', cost: 12500 },
      { id: 'AST-802', name: 'MacBook Pro M3 Max (36GB RAM)', type: 'Workstation', serial: 'MBP-AP-4412', assignedTo: 'Sophia Chen', status: 'Assigned', cost: 3400 },
      { id: 'AST-803', name: 'AWS Dedicated EC2 c6g.4xlarge', type: 'Cloud Instance', serial: 'AWS-EC2-8812', assignedTo: 'Core API Prod', status: 'Operational', cost: 4800 },
      { id: 'AST-804', name: 'Cisco Catalyst 9300 48-Port Switch', type: 'Network', serial: 'CSC-SW-1102', assignedTo: 'HQ Server Room', status: 'Maintenance', cost: 6200 }
    ];
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.assets));
  }

  getAll() {
    return [...this.assets];
  }

  add(assetData) {
    const newAsset = {
      id: `AST-${Math.floor(800 + Math.random() * 200)}`,
      name: assetData.name.trim(),
      type: assetData.type || 'Workstation',
      serial: assetData.serial.trim().toUpperCase(),
      assignedTo: assetData.assignedTo.trim() || 'Inventory Depot',
      status: assetData.status || 'Available',
      cost: parseFloat(assetData.cost) || 1000
    };

    this.assets.push(newAsset);
    this.save();
    return newAsset;
  }

  updateStatus(id, newStatus) {
    const asset = this.assets.find(a => a.id === id);
    if (asset) {
      asset.status = newStatus;
      this.save();
      return asset;
    }
    return null;
  }

  delete(id) {
    this.assets = this.assets.filter(a => a.id !== id);
    this.save();
    return true;
  }

  getTotalValuation() {
    return this.assets.reduce((sum, a) => sum + a.cost, 0);
  }
}

window.AssetModel = AssetModel;
