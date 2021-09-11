console.log('hello everyone');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter, find
// let filter = arr.filter((item, index) => {
//   console.log('check filter: ', item, 'idex: ', index);
//   return item && item > 5;
// });

// console.log(filter);

let arr1 = [
  { name: 'thanh', age: 25 },
  { name: 'tam', age: 35 },
  { name: 'long', age: 26 },
  { name: 'doan', age: 27 },
];

let filter1 = arr1.filter((item, index) => {
  return item && item.age === 27;
});

console.log(filter1);

let find = arr1.find((item) => {
  return item.age > 25;
});

console.log(find);
