function averageOneDec(array) {
  function plus(a, b) { return a + b; }
  return Math.round(array.reduce(plus) / array.length * 10)/10;
}

// Your code here.
var byCentury = {};
ancestry.forEach(function(person) {
  var age = person.died - person.born;
  var century = Math.ceil(person.died / 100);
  if (!(century in byCentury))
    byCentury[century] = [];
  	byCentury[century].push(age);
});

for (century in byCentury) {
  console.log(century + ": " + averageOneDec(byCentury[century]));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
