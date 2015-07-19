/* Historical life expectancy */

/* 
When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. Let’s take a closer look at that phenomenon.

Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).
*/

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
