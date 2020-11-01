const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let number = 0;
  for (item of matrix) {
    number += item.filter(x => x === "^^").length;
  }
  return number;
};
