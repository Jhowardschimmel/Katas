function twoSum(numbers, target) {
  for (i = 0; i < numbers.length; i++) {
    if (
      numbers.includes(target - numbers[i]) &&
      numbers[i] !== numbers[i + 1]
    ) {
      return [i, numbers.indexOf(target - numbers[i])];
    }
  }
}
