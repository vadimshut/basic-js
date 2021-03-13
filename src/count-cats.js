const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (matrix == undefined){
    throw new CustomError('Not implemented');
  }
  let arr = matrix.reduce( (acc, item) => {
      return acc.concat(item);
  }, []);
  let catsCount = arr.filter( item => item == "^^").length;
  return catsCount;
};
//Passing: 20. Failing: 0. Pending: 52  1 task