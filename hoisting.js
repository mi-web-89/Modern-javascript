console.log('userName >>', userName)
console.log('old >>', old)

var userName = "noname"
var old = 32

console.log('sayHello without "()" >>', sayHello) //return content of function
console.log('sayHello', sayHello(userName, old)) //return value or execute code

function sayHello(user, umur) {
  // console.log('content sayHello >>', `hello ${user}, ${umur} years old`)
  return (`hello ${user}, ${umur} years old`)
}

//more hoisting
function a() {
  console.log('ini a')
  
  function b() {
    console.log('ini b')
    
    function c() {
      console.log('ini c')
    }
    
    c()
  }
  
  b()
}

a()