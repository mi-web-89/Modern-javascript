// closure
function init() {
  let nama = 'ismail'
  let gender = 'pria'
  function tampilNama() {
    //hanya dapat mengakses linkungan di parent scope nya
    console.log('closure >>', nama)
    console.log('closure >>', gender)
  }
  tampilNama()
  // console.dir(tampilNama)
}
init()
// console.log(nama)

// closure 2
function init() {  
  function tampilNama(nama) {    
    console.log('closure >>', nama)    
  }
  return tampilNama
}
let tmp = init()
tmp('andi') //menjalankan fungsi tampilNama

// closure 3
function init() {  
  //anonymous function
  return function (nama) {    
    console.log('closure >>', nama)    
  }
}
let panggilNama = init()
panggilNama('budi')

//closure 4
function ucapSalam(waktu) {
  return function (nama) {
    console.log(`halo ${nama}, selamat ${waktu} `)
  }
}

const selamatPagi = ucapSalam('pagi')
selamatPagi('nita') //menjalankan closure

const selamatMalam = ucapSalam('malam')
console.dir(selamatMalam)


//function immedietly
let add = (function () {
  let counter = 0;
  return function() {
    return ++counter;
  }
})();

console.log(add());
console.log(add());
console.log(add());