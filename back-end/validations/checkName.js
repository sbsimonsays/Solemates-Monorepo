const checkName = (apparel) => {
  let splitName = apparel.name.split(" ");
  let adjustedName = splitName
    .map((word) => {
      if (word.length > 2) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word.toLowerCase();
      }
    })
    .join(" ");
  return adjustedName;
};

module.exports = checkName;
