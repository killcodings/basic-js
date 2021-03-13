const CustomError = require("../extensions/custom-error");

// module.exports = function countCats(/* matrix */) {
//   throw new CustomError('Not implemented');
//   // remove line with error and write your code here
// };

module.exports = function countCats(matrix) {
  let count = 0;
  const cat = "^^";
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == cat) {
        count++;
      }
    }
  }
  return count;
};

// countCats(matrix);
