// object create
const methodMahasiswa = {
  makan: function(value) {
    this.energi += value;
    console.log(`energi ${this.nama} : ${this.energi}`)
  },
  main: function(value) {
    this.energi -= value
    console.log(`energi ${this.nama} : ${this.energi}`)
  }
}

//function declaration => object
function mahasiswa(nama, energi) {
  // let mhs = {}
  let mhs = Object.create(methodMahasiswa)
  mhs.nama = nama
  mhs.energi = energi
  // mhs.makan = methodMahasiswa.makan
  return mhs
}

let mhs1 = mahasiswa("budi", 100)
mhs1.makan(10)


// constructor object/function and prototype
function mahasiswa4(nama, energi) {
  //   let mhs = Object.create(mahasiswa.prototype) (dibalik layar)
    this.nama = nama
    this.energi = energi    
  //   return mhs (dibalik layar)
  }
  
  //create method to object constructor
  mahasiswa4.prototype.makan = function(value) {
    this.energi += value;    
    console.log(`energi ${this.nama} : ${this.energi}`)
    console.log('this object constructor prototype >> ', this)
  }
  
  let tmpMhs2 = new mahasiswa4("muna", 10)
  tmpMhs2.makan(10)
  