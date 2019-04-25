function sumTwoSmallestNumbers(numbers) {
    numbers.sort(function (a,b) {
        return a - b;
    });
    const lowestSum = numbers[1] + numbers[0];
   
    return lowestSum;
  };

  console.log(sumTwoSmallestNumbers([100,3000,1,2,62,3,4,5]))