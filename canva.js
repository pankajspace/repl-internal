
function getSubArrays(arr){

  var set = arr.join('')

var set_length = set.length

var subsets = []

for (var length_of_subset = 1; length_of_subset <= set_length; length_of_subset++) {
    for (var start_of_subset = 0; start_of_subset <= set_length - length_of_subset; start_of_subset++) {
        var current_subset = set.substring(start_of_subset, start_of_subset + length_of_subset)
        if(subsets.indexOf(current_subset) == -1) {
            subsets.push(current_subset.split(''))
        }
    }
}
return subsets;
}
console.log(getSubArrays([1,2,3]));

// function maxLength(arr, k) {
//   // Write your code here
//   let maxlengthArr = 0;
//   const subArrays = [];
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i; j < arr.length; j++) {
//       let tempArr = arr.slice(i, j + 1);
//       let sum = tempArr.reduce((sum, item) => sum += item, 0);
//       // if (sum == k) {
//         if (tempArr.length > maxlengthArr) {
//           maxlengthArr = tempArr.length;
//         }
//         subArrays.push(tempArr);
//       // }
//     }
//   }
//   console.log(subArrays);
//   return maxlengthArr;

// }

// maxLength([1, 2, 3], 4);