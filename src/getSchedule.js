const data = require('../data/zoo_data');

const hoursDay = data.hours;
const animals = data.species;
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getAvailableAnimals = (day) => {
  const animalsOfTheDay = animals.filter((item) => item.availability.includes(day))
    .map((element) => element.name);
  return animalsOfTheDay;
};

const daysObjs = {
  Tuesday: {
    officeHour: `Open from ${hoursDay.Tuesday.open}am until ${hoursDay.Tuesday.close}pm`,
    exhibition: getAvailableAnimals('Tuesday'),
  },
  Wednesday: {
    officeHour: `Open from ${hoursDay.Wednesday.open}am until ${hoursDay.Wednesday.close}pm`,
    exhibition: getAvailableAnimals('Wednesday'),
  },
  Thursday: {
    officeHour: `Open from ${hoursDay.Thursday.open}am until ${hoursDay.Thursday.close}pm`,
    exhibition: getAvailableAnimals('Thursday'),
  },
  Friday: {
    officeHour: `Open from ${hoursDay.Friday.open}am until ${hoursDay.Friday.close}pm`,
    exhibition: getAvailableAnimals('Friday'),
  },
  Saturday: {
    officeHour: `Open from ${hoursDay.Saturday.open}am until ${hoursDay.Saturday.close}pm`,
    exhibition: getAvailableAnimals('Saturday'),
  },
  Sunday: {
    officeHour: `Open from ${hoursDay.Sunday.open}am until ${hoursDay.Sunday.close}pm`,
    exhibition: getAvailableAnimals('Sunday'),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

const availableOnDay = (day, list) => ({ ...list[day] });

const getSchedule = (scheduleTarget) => {
  const checkTargetIsName = animals.some((item) => item.name === scheduleTarget);
  if (checkTargetIsName) {
    const selected = animals.find((item) => item.name === scheduleTarget);
    const available = selected.availability;
    return available;
  }
  if (scheduleTarget === undefined || !daysOfWeek.includes(scheduleTarget)) return daysObjs;
  if (daysOfWeek.includes(scheduleTarget)) {
    return { [scheduleTarget]: availableOnDay(scheduleTarget, daysObjs) };
  }
};

module.exports = getSchedule;
