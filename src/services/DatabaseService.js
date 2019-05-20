import Lines from '../database/lines.json';
import Locations from '../database/locations.json';
import Stops from '../database/stops.json';
import Routes from '../database/routes.json';
import Schedules from '../database/schedules.json';

export default class DatabaseService {
  constructor() {
    this.db = {
      lines: Lines,
      locations: Locations,
      stops: Stops,
      routes: Routes,
      schedules: Schedules,
    };
  }

  get(collection) {
    return this.db[collection];
  }

  export() {
    return this.db;
  }
}
