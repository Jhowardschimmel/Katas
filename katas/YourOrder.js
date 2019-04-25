function order(words) {
	var arrayOfWords = words.split(' ');
	arrayOfWords.sort(function(a, b) {
		if (Number(a.match(/\d/)) < Number(b.match(/\d/)))
			return -1;
		else if (Number(a.match(/\d/)) > Number(b.match(/\d/)))
			return 1
		else
			return 0
	});
	return arrayOfWords.join(' ');
}

console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //"Fo1r the2 g3ood 4of th5e pe6ople"

console.log(order("c3 blah8 zoo1 foo4"));
