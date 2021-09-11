console.log('hello worLd from HTML');

let arr = ['Man city', 'Liverpool', 'Mu'];

for (let i = 0; i < arr.length; i++) {
  console.log('Top ', i + 1, ' ', arr[i]);
}

let i = 0;
while (i < arr.length) {
  console.log('Top ', i + 1, ' ', arr[i]);
  i++;
}

let flag = false;
while (!false) {
  console.log('check value i', i);
  i++;
  if (i === 10) flag = true;
}
