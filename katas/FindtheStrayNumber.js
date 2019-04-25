const stray = numbers => {
  for (i = 1; i < numbers.length; i++) {
    const item1 = numbers[i - 1];
    const item2 = numbers[i];
    const item3 = numbers[i + 1];
    if (item1 !== item2 && item1 !== item3) {
      return item1;
    } else if (item1 === item2 && item2 !== item3) {
      return item3;
    } else if (item1 !== item2 && item2 !== item3) {
      return item2;
    }
  }
};

console.log(stray([1, 1, 2]));
console.log(stray([1, 1, 1, 1, 1, 1, 1, 7, 1]));
console.log(stray([1, 1, 1, 1, 1, 1, 9, 1, 1]));
