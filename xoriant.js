// add all numbers in multidimensional array
const getNumber = (item) => {
  if (isNaN(item)) {
    return 0;
  } else {
    return item;
  }
}

const sumArray = (array) => {
  let sum = 0;
  array.forEach(item => {
    if (Array.isArray(item)) {
      sum = sum + sumArray(item)
    } else {
      sum = sum + getNumber(item)
    }
  })
  return sum;
}

const array = [1, 2, [[null, 5], "q", [null]], [[[2]]]]; //10
// const array = [1, [2, [3, [4, 5]]]]; //15
// sumArray(array);


function sum(a, b) {
  if (arguments.length == 2) {
    return a + b;
  }
  return function(b) {
    return a + b;
  }
}
console.log(sum(1, 2));
console.log(sum(1)(2));


//what will be output of following
var x = 21;
var girl = function() {
  console.log(x);
  var x = 20;
};
girl();

(function() {
  try {
    throw new Error();
  } catch (x) {
    var x = 1, y = 2;
    console.log("catch x", x);
  }
  console.log("x", x);
  console.log("y", y);
})();


// var str = "abc3[cd]xy2[qw]z";
// var finalstr = ""
// str.split("").forEach((char) => {
//   if (!isNaN(char)) {
//   }
// })