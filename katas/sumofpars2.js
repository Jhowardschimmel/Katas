var sum_pairs = function(ints, s) {
    var array = [];
    for (i = 0; i < ints.length; ++i) {
      if (array[s - ints[i]]) {
        return [s - ints[i], ints[i]];
      }
      array[ints[i]] = true
      console.log(array);
    }
  }
  sum_pairs([10, 5, 2, 3, 7, 5], 10);