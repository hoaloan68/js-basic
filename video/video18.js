console.log('hello world');

const array1 = [1, 30, 4, 21, 100000];

array1.sort((item1, item2) => {
  return item1 - item2;
});
console.log(array1);
