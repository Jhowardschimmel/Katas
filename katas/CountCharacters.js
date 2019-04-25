function count(string) {
  const result = [];
  const resObj = {};
  const strArr = string
    .split("")
    .sort()
    .join("")
    .match(/(.)\1*/g);
  
  if (strArr != null) {
    strArr.forEach(elem => {
      result.push(elem);
      for (i = 0; i < result.length; i++) {
        resObj[result[i].charAt(0)] = result[i].length;
      }
    });
  }
  return resObj;
}

console.log(count("abcddddda"));

