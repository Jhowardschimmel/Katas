function simplify(poly) {
  const terms = poly.match(/[-]?\d*[a-z]+/g).map(createTerm);
  const termMap = {};
  terms.forEach(t => (termMap[t.vars] = (termMap[t.vars] || 0) + t.count));
  const reducedTerms = Object.keys(termMap)
    .map(k => ({ count: termMap[k], vars: k }))
    .filter(term => term.count !== 0);
  return reducedTerms
    .sort(compareTerms)
    .map(termToString)
    .join("");
}

function createTerm(monomialArray) {
  const parsedCount = parseInt(monomialArray, 10);
  const count = createCount(parsedCount, monomialArray);
  const vars = monomialArray
    .match(/[a-z]/g)
    .sort()
    .join("");
  return { count: count, vars: vars };
}
function compareTerms(t1, t2) {
  const v1 = t1.vars,
    v2 = t2.vars;
  switch (true) {
    case ifDifferentLengths(v1, v2):
      return v1.length - v2.length;
    case termOneGreater(v1, v2):
      return -1;
    case termOneSmaller(v1, v2):
      return 1;
    default:
      return 0;
  }

  function ifDifferentLengths(v1, v2) {
    return v1.length !== v2.length;
  }

  function termOneGreater(v1, v2) {
    return v1 < v2;
  }

  function termOneSmaller(v1, v2) {
    return v1 > v2;
  }
}

function createCount(parsedCount, monomialArray) {
  if (isNaN(parsedCount)) {
    return createSignedCoeffecient(monomialArray);
  } else {
    return parsedCount;
  }
}

function createSignedCoeffecient(monomialArray) {
  if (monomialArray[0] === "-") {
    const sign = -1;
    return sign;
  } else {
    const sign = 1;
    return sign;
  }
}

function termToString(term, pos) {
  let n = term.count;
  switch (true) {
    case leadingMinusOne(n):
      ns = "-";
      break;
    case leadingPlusOne(n, pos):
      ns = "";
      break;
    case unsignedOne(n):
      ns = "+";
      break;
    case convertToString(n, pos):
      ns = String(n);
      break;
    default:
      addPlus(n);
  }
  return ns + term.vars;
}

function leadingMinusOne(n) {
  return n === -1;
}

function leadingPlusOne(n, pos) {
  return n === 1 && pos === 0;
}

function unsignedOne(n) {
  return n === 1;
}

function convertToString(n, pos) {
  return (n > 0 && pos === 0) || n < 0;
}

function addPlus(n) {
  return (ns = `+${n}`);
}
