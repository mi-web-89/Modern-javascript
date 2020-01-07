const Mahasiswa = function () {
  this.nama = 'kirin'
  this.umur = 30
  this.hello = function () {
    console.log(`halo, nama saya ${this.nama} dan umur ${this.umur} tahun`)
  }

  // setInterval di jalankan di hoisting, maka mengacu ke window object
  //solution: create a variable store this exp => const tmp = this  
  /*
  setInterval(function() {
    console.log(this) //this reference to window object (not owner/parrent object)
    console.log(tmp) //solution
  }, 500)
  */

  // setInterval(() => {
  //   console.log(this.umur++) //this reference to window object (not owner/parrent object)
  // }, 500)

}

const tmpMhs = new Mahasiswa()
tmpMhs.hello()