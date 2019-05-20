import DatabaseService from '../services/DatabaseService';

export default class BusController {
  constructor() {
    this.db = new DatabaseService();
  }

  availableLines() {
    const lines = this.db.get('lines');
    return lines;
  }

  availableStops() {
    const stops = this.db.get('stops');
    return stops;
  }
}
