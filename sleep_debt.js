const getSleepHours = day => {
  switch(day) {
    case "Monday":
      return 8;
    case "Tuesday":
      return 5;
    case "Wednesday":
      return 8;
    case "Thursday":
      return 6;
    case "Friday":
      return 8;
    case "Saturday":
      return 5;
    case "Sunday":
      return 7;
  }
}

const getActualSleepHours = () => {
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + 
  getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + 
  getSleepHours('Sunday');
};

getActualSleepHours()