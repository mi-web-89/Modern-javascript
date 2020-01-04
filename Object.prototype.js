//object literal
const mahasiswa1 = {
  nama: 'noname',
  energi: 10,
  //getters
  get ninckNam () {
    return this.nama
  },
  makan: function(porsi) {
    this.energi += porsi
    console.log('>> this', this)
  }
}
// mahasiswa1.makan(10)


// function declaration 
function mahasiswa2(nama, energi) {
  const mhs = {}
  mhs.nama = nama
  mhs.energi = energi

  //method
  mhs.makan = function(porsi) {
    this.energi += porsi
    console.log('function declaration >>', this)
    console.log(`halo ${this.nama}`)
  }
  return mhs
}
let tmpMhs1 = mahasiswa2('budi', 20)
tmpMhs1.makan(10)

// constructor function
function mahasiswa3(nama, energi) {  
  this.nama = nama
  this.energi = energi

  //method
  this.makan = function(porsi) {
    this.energi += porsi
    console.log('construction function >>', this)
    console.log(`halo ${this.nama}`)
  }
}
let tmpMhs2 = new mahasiswa3('andi', 20)
tmpMhs2.makan(5)