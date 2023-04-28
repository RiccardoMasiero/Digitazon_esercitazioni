

  const m1 = new Map([
    ['model', 'panda'],
    ['maxSpeed', 250],
    ['price', 100]
]);

const m2 = new Map([
    ['model', 'Audi'],
    ['maxSpeed', 200],
    ['price', 5000]
]);

m1.forEach(function (value, key) {
    console.log`(${key}: ${value})`;
});

m2.forEach(function (value, key) {
    console.log`(${key}: ${value})`;
});

const maxSpeedM1 = m1.get('maxSpeed');
const maxSpeedM2 = m2.get('maxSpeed');

if (maxSpeedM1 > maxSpeedM2) {
    console.log('La macchina più veloce è ' + m1.get('model'));
} else {
    console.log('La macchina più veloce è ' + m2.get('model'));
}


// const rettangoli = [
//     { base: 5, altezza: 10 },
//     { base: 3, altezza: 8 },
//     { base: 7, altezza: 4 }
//   ];
  
//   rettangoli.forEach(function(rettangolo, index) {
//     const area = rettangolo.base * rettangolo.altezza / 2;
//     console.log('L\'area del rettangolo ' + (index + 1) + ' è ' + area);
//   });
  
//   for (let i = 0; i < rettangoli.length; i++) {
//     const area = rettangoli[i].base * rettangoli[i].altezza / 2;
//     console.log('L\'area del rettangolo ' + (i + 1) + ' è ' + area);
//   }
