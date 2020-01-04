class mhs {
  constructor(nama, energi) {
    this.nama = nama
    this.energi = energi
  }

  makan(porsi) {
    this.energi += porsi
    console.log(`nama : ${this.nama} energi: ${this.energi}`)
  }
}
const tmpMhs = new mhs('budi', 10)
console.log(tmpMhs)

let tmp = []
console.log('tmp Array >>', tmp)