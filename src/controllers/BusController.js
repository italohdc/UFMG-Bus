import DatabaseService from '../services/DatabaseService';
import { stringToLocalTime, getNowTime } from '../utils'

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

  findDisclaimer(id) {
    const disclaimers = db.get('disclaimers');
    return disclaimers.find(disclaimer => disclaimer.id === id);
  },

  sortSchedulesLines() {
    const lines = db.get('lines');

    lines.forEach(line => {
      const schedule = line._schedule.times.map(schedule => {
        return {
          _line: line,
          time: stringToLocalTime(schedule.time),
          isDuplicate: schedule.isDuplicate,
          disclaimer: this.findDisclaimer(schedule._disclaimer),
        }
      });
      sortedSchedules.push.apply(sortedSchedules, schedule);
    });

    // Remove duplicated line schedules
    sortedSchedules = sortedSchedules.filter(schedule => !schedule.isDuplicate);

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
    const now = getNowTime();
    now.setFullYear(1970);
    now.setMonth(0);
    now.setDate(1);

    // Add time offset to get some schedules before current time
    if (timeOffset) {
      now.setMinutes(now.getMinutes() - timeOffset);
    }

    // Get day of week
    const todayDay = getNowTime().getDay();

    // Only return schedules bigger than current time
    // and which is active in today's day of week
    const nextBuses = sortedSchedules.filter(time => {
      return time.time > now && time._line._schedule.daysOfWeek.includes(todayDay);
    });
    return nextBuses.slice(0, limit ? limit : 12);
  }
}
