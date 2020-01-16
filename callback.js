/* ------  synchronus callback  ------- */
function hallo(nama) {
  alert(`hallo ${nama}`)   
}

function getNama(callback) {
  const nama = prompt('input name : ')
  callback(nama)
} 

// getNama(hallo) 
// getNama( n => alert(`hallo ${n}`))
// getNama( function (n) { console.log(`hallo ${n}`) }) 

/* synchronus callback */
function getProductUrl(keyword) {
  return `https//www.blibli.com/backend/search/products?searchTerm=${keyword}`
}

function success(res) {
  console.log(res)
}

function error(err) {
  console.error(err)
}

function getData(url, success, error) {
  //success & error is callback
  let xhr = new XMLHttpRequest();

  if(xhr.readyState === 4) {
    if(xhr.status === 200) success(xhr.response)
    else error(xhr.response)
  }

  xhr.open('get', url)
  xhr.send()
}

getData(getProductUrl('budi'), success, error)