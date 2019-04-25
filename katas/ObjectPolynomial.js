function simplify(poly) {
  if (poly.charAt(0) !== "-" && poly.charAt(0) !== "+") {
    poly = "+" + poly;
  }
  let coeffecientArray = [];
  let arrayPolyOne = [];
  let arrayPoly = poly.split(/(\+|-)/);
  arrayPoly.shift();
  for (var i = 0; i < arrayPoly.length; i++) {
    arrayPoly[i] += arrayPoly[i + 1];
    arrayPoly.splice(i + 1, 1);
    arrayPolyOne.push(arrayPoly[i].charAt(1).replace(/"/g,""));
    // console.log((arrayPoly[i].charAt(1).replace(/"/g,"")));
    // console.log(arrayPolyOne);
    // if (arrayPolyOne[i] === NaN) {
    //     console.log(arrayPolyOne[i] === NaN)
    //   coeffecientArray.push(arrayPoly[i].slice(0, 1) + "1");
    //   console.log(coeffecientArray);
    // }
    // console.log(coeffecientArray);
  }
  function Monomial(sign, coeffecient, variables) {
    this.sign = sign;
    this.coeffecient = coeffecient;
    this.variables = variables;
  }
  //    const Monomial = new Monomial(arrayPoly[i].charAt(0), )
  console.log(arrayPolyOne);
  
//   for (let i = 0; i < arrayPolyOne.length; i++) {
//     if (arrayPolyOne[i] === NaN) {
//       console.log(arrayPolyOne[i] === NaN)
//     coeffecientArray.push(arrayPoly[i].slice(0, 1) + "1");
//   }
// }
  console.log(arrayPolyOne);
  console.log(arrayPoly);
}
simplify("a+5ab+3a-c-2a");
