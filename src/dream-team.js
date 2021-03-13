const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  if (!Array.isArray(members)){
    return false
  }
  let stringMembers = members.filter( item => typeof(item) == 'string');
  let firstLetters = stringMembers.map( item => item.trim()[0].toUpperCase());
  let result = firstLetters.sort().join('');
  return result
};
// 28 passing 44 pending  2 task