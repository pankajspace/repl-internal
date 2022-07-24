// finding balanced paranthesis
function checkBalancedParanthesis(str) {
  return !str.split("").reduce(function(acc, curr) {
    if (acc < 0) {
      return ++acc;
    }
    if (curr == "(") {
      return ++acc;
    }
    if (curr == ")") {
      return --acc;
    }
    return acc;
  }, 0);
}
// console.log(checkBalancedParanthesis(")())(("));
// console.log(checkBalancedParanthesis("(())"));


// complex check balanced paranthesis
const params = ["{[()}]", ")]}{[(", "{[()]}", "()[]{}"];
// isMatchingBrackets(params);

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