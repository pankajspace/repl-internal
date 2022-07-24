// complex check balanced paranthesis
const params = ["{[()}]", ")]}{[(", "{[()]}", "()[]{}"];
let isMatchingBrackets = function(str) {
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for (let brace of str) {
    // If character is an opening brace add it to a stack
    if (brace === '(' || brace === '{' || brace === '[') {
      stack.push(brace);
    }
    //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
    else {
      let last = stack.pop();
      //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
      if (brace !== map[last]) { return false };
    }
  }
  // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
  if (stack.length !== 0) { return false };
  return true;
}
console.log(isMatchingBrackets(params[0]));
console.log(isMatchingBrackets(params[1]));
console.log(isMatchingBrackets(params[2]));
console.log(isMatchingBrackets(params[3]));


var once = () => {
  var flag = true;
  return function() {
    if (flag) {
      console.log('once');
    }
    flag = false;
    return 22;
  }
}
var initialize = once();
console.log(initialize());
console.log(initialize());
//expected output as follows
//once
//22
//22


// calling multiple promises
// p1, p2,    //not dependant Promise calls
// p3 -> p4   //dependent Promise call
// get data from all Promises in the end


// design patterns


//if we are passing different types of data as props to React components then how we will render those props
// <Comp a="10" />
// <Comp a="true" />
// <Comp a={[1, 2, 3, 4, 5]} />
// <Comp a={{name:"Amit", Age:"100"}} />

