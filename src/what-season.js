const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined){
    return 'Unable to determine the time of year!'
  }
  try {
    date.toJSON();
  } 
  catch (err) {
    throw new Error(err)
  }
 
  let seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'fall', 'fall', 'fall', 'winter'];
  return seasons[date.getMonth()];
};
