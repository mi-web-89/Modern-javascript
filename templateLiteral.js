const mhs1 = {
  nama: 'andi'
}

const el1 = `<div>
<h2>${mhs1.nama}</h2>
</div>`
console.log(el1)

// template literal looping and condition
//nested atau html fragment bersarang
const mhs2 = [
  {
    nama: 'andi',
    email: 'andi@gmail.com'
  },
  {
    nama: 'budi',
    email: 'budi@gmail.com',
    fb: 'budi_dev'
  },
  {
    nama: 'cici',
    email: 'cici@gmail.com'
  }
]

const el2 = `<div class="mhs">
  ${mhs2.map( v => `<ul>
      <li> ${v.nama} </li>
      <li> ${v.email} </li>
      ${v.fb ? `<li>${v.fb}</li>` : '' }
    </ul>`
  ).join('')}
</div>`
document.body.innerHTML = el2

const nama = 'dodi'
const umur = '20'

// function coba(str, nama, umur) {
//   return nama
// }

//rest parameter
function coba(str, ...values) {
  // let rslt = ''
  // str.forEach((v, i) => {
  //   rslt += `${v}${values[i] || ''}`
  // })
  // return rslt

  return str.reduce((result, v, i) => {
    return `${result}${v}${values[i] || ''}`
  }, '')
}

//tagged template => akan memecah tiap2 string kedalam array
const str = coba`nama : ${nama} dan umur : ${umur} tahun`
console.log('str >>', str)