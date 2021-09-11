console.log('hello worLd from HTML');

//key: value
let obj = {
  name: 'Thanh',
  address: 'HCM',
  a: function () {
    console.log('hello world');
    return '';
  },
}; // là 1 object

//JSON
//("{name: 'tam', address: 'fsfsf'}");

let b = 'Eric';
console.log('type of obj : ', typeof obj);

console.log(obj.a());

console.log('what is your name: ', `My name's:`, obj.name);
//or
console.log('what is your name: ', `My name's:`, obj['name']);

let y = 'c';
obj[y] = 'thanh';
console.log(obj);
