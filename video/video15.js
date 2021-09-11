console.log('hello world from html');

let sum = (a, b) => {
  return a / b;
};

let obj = {
  name: 'thanh',
  address: 'HCM',
  getName: function () {
    return this.name;
  },
};

console.log('get name obj ', obj.getName());

let sum = (a, b, callback) => {
  let tong = a + b;
  //   setTimeout(() => { // after 5s run
  //     callback(tong);
  //   }, 5000);

  setInterval(() => {
    // loop after 1s
    callback(tong);
  }, 1000);
};

let printSum = (message) => {
  console.log('sum 6 + 9 : ', message);
};

sum(6, 9, printSum);
