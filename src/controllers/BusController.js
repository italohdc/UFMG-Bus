import DatabaseService from '../services/DatabaseService';

const db = new DatabaseService();

export default {
  availableLines() {
    const lines = db.get('lines');
    return lines;
  },

  availableStops() {
    const stops = db.get('stops');
    return stops;
  }
}
