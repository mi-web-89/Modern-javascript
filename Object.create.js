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
  // let mhs = Object.create(methodMahasiswa)
  mhs.nama = nama
  mhs.energi = energi
  // mhs.makan = methodMahasiswa.makan
  return mhs
}

let mhs1 = mahasiswa("budi", 100)
mhs1.makan(10)
