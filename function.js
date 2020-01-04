//this pada function declaration
function hello() {
  console.log('>> this - function declaration', this) //mengembalikan object global
}
hello()

// this pada object literal
var obj = {}
obj.hello = function () {
  console.log('>> this - object literal', this) //mengembalikan owner object (not object global)
}
obj.hello()

//this pada constructor
function helloConstructor() {
  console.log('this - constructor >>', this) //this mengembalikan new object atau new instance
}
new helloConstructor()

//function expression
myFunc = function() {
  console.log('this - function expression >>', this)
}
myFunc()

//arrow function
myFuncArrow = () => {
  // var b = 2
  console.log('this - arrow function >>', this)
}
// console.log(b)
myFuncArrow()

//arrow function object literal
var objArrow = {}
objArrow.hello = () => {
  //arrow function memiliki perlakuan this yang berbeda
  console.log('>> this - object literal arrow', this) //mengembalikan global object
}
objArrow.hello()