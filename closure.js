
//function immedietly
let add = (function () {
  let counter = 0;
  return function() {
    return ++counter;
  }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());