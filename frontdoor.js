// find sum of maximum numbers in three arrays
var array1 = [15, 45, 30, 9, 5, 45];
var array2 = [8, 6, 25, 4, 9, 20];
var array3 = [5.8, 6, 7, 30, 9, 9];

const sortFn = (a, b) => {
  return a - b;
}

let max1 = array1.sort(sortFn)[array1.length - 1];
let max2 = array2.sort(sortFn)[array2.length - 1];
let max3 = array3.sort(sortFn)[array3.length - 1];

let sum = max1 + max2 + max3;
console.log(sum);

// what is variable typing?
// diff between put, patch and post.
// can we use a variable across two files in javascript?
// React fibre
// disadvantages of React
// what is React test renderer package
// can session storage be kept by increasing expiration time
// new features in html5