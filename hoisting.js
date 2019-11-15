// sayHello(a)

console.log(a)

var user = "test"
var b = 32

sayHello(user)

function sayHello(user) {
  console.log(`hello ${user}, ${b} years old`)
}

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