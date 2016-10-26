var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
var newArray = integers
.sort(function(a, b){return b-a})
//console.log(integers);
 .filter(function(num){return num <= 19})
 //console.log(newArray);
  .map(function(num){ return ((num * 1.5) - 1)})
  //console.log(newArray);
.reduce(function(prev, curr) {return prev + curr});
 console.log(newArray);


 