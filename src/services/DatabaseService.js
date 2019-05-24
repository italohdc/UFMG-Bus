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

    // Sort some collections by name
    shouldSortByName.forEach(collection => {
      this.db[collection].sort(function(a, b) {
        const textA = a.name.toLowerCase();
        const textB = b.name.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
    });

    this.populate('_schedule', this.db.lines, this.db.schedules);
    this.populate('_route', this.db.lines, this.db.routes);
    this.populateArray('_stop', 'route', this.db.routes, this.db.stops);
    console.log(this.db);
  }

  populate(modelName, collectionToPopulate, collectionToSearchFrom) {
    collectionToPopulate.forEach(collection => {
      if (typeof collection[modelName] === 'string' || collection[modelName] instanceof String) {
        collection[modelName] = collectionToSearchFrom.find(colFrom => colFrom.id === collection[modelName]);
      }
    });
  }

  populateArray(arrayName, modelName, collectionToPopulate, collectionToSearchFrom) {
    collectionToPopulate.forEach(collection => {
      collection[modelName].forEach(array => {
        if (typeof array[arrayName] === 'string' || array[arrayName] instanceof String) {
          array[arrayName] = collectionToSearchFrom.find(colFrom => colFrom.id === array[arrayName]);
        }
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
