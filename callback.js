function hallo(nama) {
  alert(`hallo ${nama}`)   
}

function getNama(callback) {
  const nama = prompt('input name : ')
  callback(nama)
} 

// getNama(hallo)
// getNama( n => alert(`hallo ${n}`))
// getNama( function (n) { 
//   alert(`hallo ${n}`) 
// }) 


// async callback 
function getData(url, success, error) {
  //success & error is callback
  let xhr = new XMLHttpRequest();
  
  if(xhr.readyState === 4) {
    if(xhr.status === 200) {
      success(xhr.response)
    }
    else if(xhr.status === 404) {
      error()
    }
  }

  xhr.open('get', url)
  xhr.send()
}

// function success(res) {
//   console.log(res)
// }

// function error() {
//   alert('error')
// }

getData('mahasiswa.json', (res) => {
    console.log(res)
  }, () => alert('error')
)