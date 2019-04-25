function squareDigits(num) {
  const numArray = num.toString().split("");
  for (i = 0; i < numArray.length; i++) {
    numArray[i] = Math.pow(numArray[i], 2);
  }

  const numSquaredString = numArray.join("");
  const numSquared = parseInt(numSquaredString, 10);
  return numSquared;
}
