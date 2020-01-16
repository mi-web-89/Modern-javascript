const promise1 = new Promise((resolve, reject) => {
  resolve("success")
  reject('error')
})

// console.log(promise1)

// promise1
//   .then(res => {
//     console.log(res)
//   })
//   .cacth(err => {
//     console.error(err)
//   })


const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve('success2'), 1000) 
  setTimeout(reject('error2'), 1000)
})

console.log('start')
// console.log(
//   promise2
//     .finally(() => console.log('finally')) //biasanya digunakan untuk loading
//     .then((res) => {
//       console.log(res)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// )
console.log('end')

// promise all
Promise.all([promise1, promise2])
  .then((res) => {
    [p1, p2] = res

    // console.log(res)
    console.log(p1)
    console.log(p2)
  })