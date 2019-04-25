function simplify(poly) {
  /* PSUEDOCODE
1. Reorder variables of monomials alphabetically.
check1a. If the first character is a  "-" do nothing, else add a "+" to the front of the poly string.
check2a. Locate the "+" or "-" characters.
check3a. Divide poly into substrings starting with "+" or "-".
4a. Sort each substring alphabetically keeping the sign in place.
2. For monomials without a coefficient add a coeffecient of 1 to them.  
3. Reduce like monomials by adding or subtracting coeffecients. String.repeat(n)?
4. Order monomials from least variables to most variables.
5. If two or more monomials have the same number of variables compare their variables alphabetically.
6. If the first variables are the same compare the second variables and sort so on aand so forth...
7. If the first character after sorting is + remove it.
*/
  //your code here
  //   function noSign(poly) {
  //     return poly.charAt(0) !== "-" && poly.charAt(0) !== "+";
  //   }
  //   if (noSign(poly)) {
  //      const signedPoly = "+" + poly;
  //      return sortPoly(signedPoly);
  //   }

  if (poly.charAt(0) !== "-" && poly.charAt(0) !== "+") {
    poly = "+" + poly;
    const splitPoly = poly.split(/(\+|-)/);
    splitPoly.shift();
    for (var i = 0; i < splitPoly.length; i++) {
      splitPoly[i] += splitPoly[i + 1];
      splitPoly.splice(i + 1, 1);
    }
    console.log(splitPoly);
    // console.log(splitPoly.sort(function(a,b){
    //     return a.localeCompare(b)
    // }));
  } else {
    const splitPoly = poly.split(/(\+|-)/);
    splitPoly.shift();
    for (var i = 0; i < splitPoly.length; i++) {
      splitPoly[i] += splitPoly[i + 1];
      splitPoly.splice(i + 1, 1);
    }
    console.log(splitPoly);
    // console.log(splitPoly.sort(function(a,b){
    //     return a.localeCompare(b)
    // }));
  }
  //   console.log(poly.split(/\+|-/));
  //   console.log(poly);
  //   let polyArray = poly.split(/\+|-/);
}
simplify("-fds8+df4+a2b+b-b+b");
// /<br \/>&#?[a-zA-Z0-9]+;/g
// /<br \/>(?=&#?[a-zA-Z0-9]+;)/g
