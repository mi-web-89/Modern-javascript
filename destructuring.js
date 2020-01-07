// desctructuring array
const perkenalan = ['halo', 'nama', 'saya', 'budi']

// const [a, , c, d] = perkenalan
const [a, b, ...rest] = perkenalan

// console.log(c)
console.log('array >>', b)

//desctructuring object
const mhs = {
  nama: 'sandi',
  umur: 30
}

const {nama: n, umur: u, email: e = 'test@gmail.com' } = mhs
console.log('default value >>', e)

function getNama({nama}) {
  return nama
}

function getMhs({nama, umur}) {
  return `nama :  ${nama} dan umur ${umur}`
}

console.log('object >>', getNama(mhs))
console.log('getMhs >> ', getMhs(mhs))

//example desctructuring 
function kalkulasi(a, b) {
  return [a + b, a - b, a * b]
}

//without destructuring
const tambah2 = kalkulasi(2, 4)[0]
//desctructuring
const [tambah, kurang, kali] = kalkulasi(2, 5)

console.log('tambah dan kali >>', tambah)

