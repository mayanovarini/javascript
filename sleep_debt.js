const getSleepHours = day => {
  let hours = prompt('how many hours of sleep did you get on', day);
  return +hours;
};

const getActualSleepHours = () => {
  return (
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday')
  );
};

const getIdealSleepHours = () => 7 * 7.54;

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let ideaSleepHours = getIdealSleepHours();

  if (actualSleepHours === ideaSleepHours) {
    console.log('nice sleep!');
  }

  actualSleepHours > ideaSleepHours ?
    console.log('too much sleep', actualSleepHours, 'hrs') :
    console.log('not enough sleep!', actualSleepHours, 'hrs');
  }

calculateSleepDebt();
