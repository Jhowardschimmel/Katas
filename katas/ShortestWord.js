function findShort(s) {
  const array = s.split(" ")
  .sort(function(a, b) {
    return a.length - b.length;
  });
  return array[0].length;
}

console.log(findShort("Hi my name is Jesse"));
//function findShort(s){
    //return Math.min.apply(null, s.split(' ').map(w => w.length));
//}