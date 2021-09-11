console.log('hello worLd from HTML');

let arrTop4 = ['Liver', 'Mu', 'Chelsea', 'Mancity'];

let i = 0;
while (i < arrTop4.length) {
  // console.log('Top club: ', i + 1, arrTop4[i]);

  i++;
  if (arrTop4[i] === 'Chelsea') {
    console.log(arrTop4[i]);
    continue;
  }

  console.log(i);
}
