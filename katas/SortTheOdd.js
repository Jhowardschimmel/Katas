function sortArray(array) {
  const oddArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      oddArray.push(array[i]);
    }
  }
  oddArray.sort(function(a, b) {
    {
      return a - b;
    }
  });

  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      oddArray.splice(i, 0, array[i]);
    }
  }

  return oddArray;
}
