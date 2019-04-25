function simplify(poly) {
  if (poly.charAt(0) !== "-" && poly.charAt(0) !== "+") {
    poly = "+" + poly;
  }

  const polyArray = poly.split(/(\+|-)/);

  polyArray.shift();

  for (let i = 0; i < polyArray.length; i++) {
    polyArray[i] += polyArray[i + 1];
    polyArray.splice(i + 1, 1);

    if (polyArray[i].search(/\d/) === -1) {
      let replacementValue = polyArray[i].replace(
        polyArray[i],
        polyArray[i].charAt(0) +
          "1" +
          polyArray[i].slice(1, polyArray[i].length)
      );
      polyArray.splice(i, 1, replacementValue);
    }
  }

  const polyObject = Object.assign({}, polyArray);
  const polyKeys = Object.keys(polyObject);
  const polyValues = Object.values(polyObject);
  const polyEntries = Object.entries(polyObject);
  const polyMap = new Map(polyEntries);

  const term = class Monomial {
    constructor(sign, coeffecient, variables) {
      this.sign = sign;
      this.coeffecient = coeffecient;
      this.variables = variables;

    }
  };
  createTerms();

  function createTerms() {
    let terms = [];
    let variables = [];
    for (let [key, value] of polyMap) {
      terms[key] = new term(
        value.charAt(0),
        value.charAt(1),
        value.slice(2, value.length)
      );
    }
    for (let i = 0; i < terms.length; i++) {
      let str = terms[i].variables;
      sortString(str);
      function sortString(str) {
        let arr = str.split("");
        let sorted = arr.sort();
        variables.push(sorted.join(""));
      }
    }

    variables.sort();
    for (let i = 0; i < terms.length; i++) {
      terms[i].variables = variables[i];
      terms[i].coeffecient = Number(terms[i].coeffecient);
    }

    const fliteredFinalVariables = variables.filter(function(
      value,
      index,
      variables
    ) {
      return !variables.includes(variables[index], index + 1);
    });

    const fliteredVariables = variables.filter(function(
      value,
      index,
      variables
    ) {
      return variables.includes(variables[index], index + 1);
    });
    
    const variablesObject = Object.assign({}, variables);

    const termsObject = Object.assign({}, terms);

    const termsEntries = Object.entries(termsObject);

    const termValues = Object.values(termsObject);
     //console.log(termValues);

    const variableKeys = Object.values(variablesObject);
    //  console.log(variableKeys);

    // var result = {};
    // variableKeys.forEach((key, i) => (result[key] = termValues[i]));
    // console.log(result);

    const termsMap = new Map(termsEntries);
    
    //  console.log(termsMap);

     for (let [key, value] of termsMap) {
      //  console.log(key);
      //  console.log(typeof(value.variables))
      //  console.log(value.variables);
       if (!termsMap.has(value.variables)){
       termsMap.set(value.variables, value);

       termsMap.delete(key);
       } else if (key !== value.variables){
         //START BELOW THIS LINE
         let coeffecient = value.coeffecient;
         
          let testTerm = new term(
           value.sign,
           coeffecient,
           value.variables
         )
          termsMap.set(value.variables, testTerm)
        //  termsMap.delete(key);
        
        //  let testTerm = new term(
        //    value.sign,
        //    value.coeffecient,
        //    value.variables
        //  )
        //   termsMap.set(value.variables, testTerm)

            //  termsMap.delete(key);

       }
       
     }
     console.log(termsMap);

    // variables.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    // console.log("counts")
    // console.log(counts);
    // let result = terms.map(a => a.foo)
    //  let editedTermsArray = [];
    //  for (let i = 0; i < terms.length; i++) {

    //     if (terms[i].variables === variables[i+1]) {
    //       terms[i+1].coeffecient += terms[i].coeffecient;
    //       terms.shift(i); i=-1; continue;

    //       // editedTermsArray.push(terms[i])
    //  }
    // }
    //  for (let index = 0; index < terms.length; index++) {

    //   if (terms[index].variables === fliteredVariables[index]) {
    //     terms[index].coeffecient = terms[index].coeffecient + terms[index+1].coeffecient;
    //     terms.splice(index+1, 1);

    //  }

    // }

    //  const filteredTerms = terms.filter(function(value, index, terms){
    //    if (terms[index].variables === fliteredVariables[index]) {
    //      terms[index].coeffecient = terms[index].coeffecient + terms[index+1].coeffecient;
    //      terms.splice(index+1, 1);

    //    }  })
    //  const variablesObject = Object.assign(variables);
    //  const variablesEntries = Object.entries(variablesObject);
    //  const variablesTermsMap = new Map(variablesEntries, terms);
    //  console.log(variablesTermsMap);
    // for (let i = 0; i < variables.length; i++) {
    //   if (variables[i] === variables[i+1]) {
    //     terms[i].coeffecient += terms[i+1].coeffecient;
    //     variables.splice(i+1, 1);
    //     terms.splice(i+1, 1);

    //     console.log("vars"+variables)

    //   }

    // }
    //  for (let i = 0; i < variables.length ; i++){
    //    if ( )
    //  }

    // console.log(polyMap);
    // console.log("Check "+variables);
    // console.log(terms);
    // console.log(editedTermsArray)
    //  console.log(fliteredVariables)
    //  console.log(fliteredFinalVariables);
    // console.log(filteredTerms);

    return terms;
  }
}
simplify("abc+dc+dcba+abc+cba+dc");
