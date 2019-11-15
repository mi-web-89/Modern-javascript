// function immedietly

// let add = (function () {
//   let counter = 0;

//   return function() {
//     return ++counter;
//   }
// })();

// console.log(add());
// console.log(add());
// console.log(add());

const categories = [
  {
    id: "1",
    name: "smartphone",
    children: [
      {
        id: "1.2",
        name: "android",
        children: [
          {
            id: "1.2.1",
            name: "xiaomi"
          },
          {
            id: "1.2.2",
            name: "redmi",
            children: [
              {
                id: "1.2.2.1",
                name: "redmi note 8 pro"
              }
            ]
          }
        ]
      },
      {
        id: "1.3",
        name: "ios",
        children: [
          {
            id: "1.3.1",
            name: "iphone 7+"
          }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "pc"
  }
];

const tmp = categories.map((v, i, arr) => {
  return function () {
    return arr[i];
  }();
});

// console.log(tmp);

function getCategories(categories) {
  let rslt = [];
  // console.log(tmpArr);
  (function mapArray(arr, result) {
    for (let i = 0; i < arr.length; i++) {
      // console.log(arr.length)
      if (arr[i].children) {
        rslt.push({ id: arr[i].id, text: arr[i].name, children: arr[i].children })
        // mapArray(arr[i].children)
      } else {
        rslt.push({ id: arr[i].id, text: arr[i].name })
      }
    }
  })(categories)

  console.log(rslt);
}

getCategories(categories)