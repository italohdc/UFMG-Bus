import DatabaseService from '../services/DatabaseService';

const db = new DatabaseService();

let sortedSchedules = [];

export default {
  availableLines() {
    const lines = db.get('lines');
    return lines;
  },

  availableStops() {
    const stops = db.get('stops');
    return stops;
  },
  
  sortSchedulesLines() {
    const lines = db.get('lines');
    lines.forEach(line => {
      const schedule = line._schedule.times.map(schedule => {
        return {
          _line: line,
          time: new Date(schedule)
        }
      });
      sortedSchedules.push.apply(sortedSchedules, schedule);
    });
    sortedSchedules.sort(function(a,b){
      return new Date(a.time) - new Date(b.time);
    });
  },

  nextSchedules(timeOffset, limit) {
    // Create a array of schedules sorted by time if non-existent
    if (sortedSchedules.length === 0) {
      this.sortSchedulesLines();
    }

    // Get current time and change date to 1970 to have
    // the same date as saved on db
    const now = new Date();
    now.setFullYear(1970);
    now.setMonth(0);
    now.setDate(1);

    // Add time offset to get some schedules before current time
    if (timeOffset) {
      now.setMinutes(now.getMinutes() - timeOffset);
    }

    // Only return schedules bigger than current time
    const nextBuses = sortedSchedules.filter(time => {
      return time.time > now;
    });
    return nextBuses.slice(0, limit ? limit : 12);
  }
}
