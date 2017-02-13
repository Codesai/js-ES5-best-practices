// Explicit binding using apply and passing more arguments

function print(num, random) {
  console.log(
    '#' + num + ' ' + this.species + ': ' + this.name + ' ' + random
  );
}

var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Moby dick' }
];

for (var i = 0; i < animals.length; i++) {
  print.apply(animals[i], [i, Math.random()]);
}

// Example modified from example in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call