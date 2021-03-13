const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    if (arr.length > 0) {
      let mas = arr;

      for (i = 0; i < mas.length; i++) {
        if (arr[i] == "--discard-next" && arr[i + 1] != null) {
          mas[i + 1] = null;
        } else if (mas[i] == "--discard-prev" && arr[i - 1] != null) {
          mas[i - 1] = null;
        } else if (mas[i] == "--double-next") {
          if (i < mas.length - 2) {
            mas[i] = mas[i + 1];
          }
        } else if (mas[i] == "--double-prev") {
          if (i > 0) {
            mas[i - 1];
          }
        }

        mas = filtered = mas.filter(function (el) {
          return el != "--double-next";
        });

        mas = filtered = mas.filter(function (el) {
          return el != "--double-prev";
        });
        mas = filtered = mas.filter(function (el) {
          return el != "--discard-next";
        });

        mas = filtered = mas.filter(function (el) {
          return el != "--discard-prev";
        });

        return mas.filter(function (el) {
          return el != null;
        });
      }
    } else return [];
  } else throw error;
};
