const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  if (arr.length === 0) {
    return [];
  }
 let res = [];
  for (let i in arr) {
    if (arr[i - 1] === `--discard-next` ) {
        continue;
    } else if (arr[i] === `--discard-prev`
            && arr[i - 2] !== `--discard-next`) {
              res.pop();
    } else if (arr[i - 1] === `--double-next`) {
              res.push(arr[i], arr[i]);
    } else if (arr[i] === `--double-prev` 
            && arr[i - 2] !== `--discard-next`) {
             i == 0 ? 0 : res.push(arr[i - 1]);
    } else if (arr[i] !== `--double-next` 
            && arr[i] !== '--discard-next'
            && arr[i] !== `--double-prev`
            && arr[i] !== `--discard-prev`) {
              res.push(arr[i]);
    }
  
  }
  return res;
};
