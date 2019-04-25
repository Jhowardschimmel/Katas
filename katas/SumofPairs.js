const outputArray = [];
var sum_pairs = function(ints, s) {
  for (i = 0; i < ints.length; i++) {
    for (j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        outputArray.push(ints[i], ints[j]);
        ints = ints.slice(i + 1, j + 1);

        if (ints.length > 1) {
          sum_pairs(ints, s);
          
        }
        const finalArray = [outputArray[outputArray.length-1], outputArray[outputArray.length-2]];
        return finalArray;
      };
    };
  };
};
//console.log(sum_pairs([1,-2,3,0,-6,1], -6))
console.log(sum_pairs([5,9,13,-3], 10))