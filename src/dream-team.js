const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  function trim(str) {
    try {
      if (str && typeof str == "string") {
        return str.replace(/^\s*|\s*$/g, "");
      } else {
        return "";
      }
    } catch (e) {
      return str;
    }
  }

  if (
    typeof members !== undefined &&
    typeof members !== null &&
    isNaN(members) &&
    Array.isArray(members)
  ) {
    console.log(typeof members);
    if (members.length > 0) {
      mas = [];
      for (let i = 0; i < members.length; i++) {
        if (
          typeof members[i] !== null &&
          typeof members[i] !== undefined &&
          isNaN(members[i])
        ) {
          let a = trim(members[i]).toUpperCase().split("");
          mas.push(a[0]);
        }
      }
    }

    if (typeof mas !== null) {
      return mas.sort().join("");
    } else {
      return false;
    }
  } else {
    return false;
  }
};
