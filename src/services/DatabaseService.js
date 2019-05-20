import Lines from '../database/lines.json';
import Locations from '../database/locations.json';
import Stops from '../database/stops.json';
import Routes from '../database/routes.json';
import Schedules from '../database/schedules.json';

const shouldSortByName = ['lines', 'stops'];

export default class DatabaseService {
  constructor() {
    this.db = {
      lines: Lines,
      locations: Locations,
      stops: Stops,
      routes: Routes,
      schedules: Schedules,
    };
    shouldSortByName.forEach(collection => {
      this.db[collection].sort(function(a, b) {
        const textA = a.name.toLowerCase();
        const textB = b.name.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
    });
  }

  get(collection) {
    return this.db[collection];
  }

  getSortedByName(collection) {
    const table = this.db[collection];
    console.log(table);
    return table
  }

  export() {
    return this.db;
  }
}
