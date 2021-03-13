const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = matrix.reduce( (acc, item) => {
      return acc.concat(item);
  }, []);
  let catsCount = arr.filter( item => item == "^^").length;
  return catsCount;
};
