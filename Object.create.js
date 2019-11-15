const methodMahasiswa = {
  makan: function(value) {
    this.energi += value;
    console.log(`energi ${this.nama} : ${this.energi}`)
  }
}

//function declaration
function mahasiswa(nama, energi) {
//   let mhs = {}
  let mhs = Object.create(methodMahasiswa)
  mhs.nama = nama
  mhs.energi = energi
  return mhs
}

let mhs1 = mahasiswa("budi", 100)
mhs1.makan(10)
// console.log(mhs1)