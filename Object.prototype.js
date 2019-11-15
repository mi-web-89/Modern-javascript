
// constructor object
function mahasiswa(nama, energi) {
//   let mhs = {}
//   let mhs = Object.create(mahasiswa.prototype)
  
  this.nama = nama
  this.energi = energi
  
//   return mhs
}

mahasiswa.prototype.makan = function(value) {
  this.energi += value;
  console.log(`energi ${this.nama} : ${this.energi}`)
}

let mhs1 = new mahasiswa("budi", 10)
console.log(mhs1)
// mhs1.makan(10)