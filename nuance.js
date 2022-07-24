// 5. What will be the output of below code? 
var b;
(function() {
  // var a = b = 3;
  b = 3;
  var a = b;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

var n = '1';
console.log('typeof n', typeof n);
console.log('typeof Number(n)', typeof Number(n));

console.log(-0 ? 'truthy' : 'falsy');
console.log(0 ? 'truthy' : 'falsy');
console.log(+0 ? 'truthy' : 'falsy');


// 6. Write a method “sum” which gives the following output
function sum1(a, b) {
  return parseInt(a) + parseInt(b);
}
console.log(sum1('2', '3'));   // Outputs 5

function sum2(a) {
  return function(b) {
    return a + b;
  }
}
console.log(sum2(2)(3));  // Outputs 5


// 8. What is the output of the following?  
const KEY = 'white_rabbit';
if (true) {
  const KEY = 'ginger_rabbit';
}
console.log(KEY); //  'white_rabbit'


// 9. What is the output of the following?  
// let x = 42;
// if (true) {
//   console.log(x);
//   let x = 1337;
// }


// 10. Which of the following statements is not true about this example?  
const obj = {
  outer: function() {
    const self1 = this;
    console.log('self1', self1);
    function inner1() {
      const self2 = this;
      console.log('self2', self2);
      function inner2() {
        const self3 = this;
        console.log('self3', self3);
      }
    }
  }
}
obj.outer();
console.log('obj.outer()', obj.outer());
// self1 !== self3  //  false
// self2 !== self3  //  false
// self1 === self2  //  true
// self2 !== self3	//  false


// 11. What are the different ways to access the properties of data object?
var data = { foo: 'bar' };
console.log(data.foo);
console.log(data['foo']);
const { foo } = data;
console.log(foo);


// 12. Write a code snippet to get the list of the names of the properties of a JavaScript object.
Object.keys(data);


// 16. Implement function to read field inside nested code
const obj1 = {
  a: {
    b: {
      c: {
        d: {
          e: 'Yes!'
        }
      }
    }
  }
}

function read(obj1, path) {
  let pathArr = path.split(".");
  let result = obj1;
  pathArr.forEach((item) => {
    result = result[item];
  });
  return result;
}
console.log(read(obj1, 'a.b.c.d.e'));
