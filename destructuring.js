// desctructuring array
const perkenalan = ['halo', 'nama', 'saya', 'budi']

// const [a, , c, d] = perkenalan
const [a, b, ...rest] = perkenalan

// console.log(c)
console.log('array >>', b)

//desctructuring object
const mhs = {
  nama: 'sandi',
  umur: 30,
  nilai: {
    tugas: 80,
    uts: 80,
    uas: 70
  }
}

const {nama: n, umur: u, email: e = 'test@gmail.com' } = mhs
console.log('default value >>', e)

function getNama({nama}) {
  return nama
}

function getMhs({nama, umur, nilai: { uas }}) {
  return `nama :  ${nama}, umur: ${umur} dan nilai uas: ${uas}`
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

//----------------- looping -----------------
perkenalan.forEach((m, i) => {
  console.log(`${m} >> ${i}`)
})

for(const m of perkenalan) {
  console.log('for .. of >>', m)
}

for(const [i, m] of perkenalan.entries()) {
  console.log('for..of with entries >>', i, m)
}