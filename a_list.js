/* Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

function arrayToList(array) {
  var list = {};
  var tempList = {};
  for (var i = array.length - 1; i >= 0; i--) {
    if (i === array.length - 1) {
      list = {value: array[i], rest: null};
      tempList = list;
    }
    else {
     list = {value: array[i], rest: tempList};
     tempList = list;
    }
  }
  return list;
}

function listToArray(list) {
  var arr = [];
  for (var node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

function prepend(element, list) {
  var newList = {};
  newList = {value: element, rest: list};
  return newList;
}

function nth(list, number) {
  var arr = listToArray(list);
  return arr[number];
}

function nthR(list, number) {
  while (list.rest !== null) {
    list = list.rest;
    number = number - 1;
  }
  if (number === 0) return list.value;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nthR(arrayToList([10, 20, 30]), 1));
// → 20
