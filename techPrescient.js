// write a function to return modified values of the variable mac , replace E with 0 and T with 0
// response "0C:B0:81:04"
let mac = "EC:B0:8T:E4";
const mapper = {
  E: 0,
  T: 1
}
const macArr = mac.split("");
const keys = Object.keys(mapper);
let str = '';
macArr.forEach((item) => {
  keys.includes(item) ? str += mapper[item] : str += item;
})
console.log(str);


//Get list of students whose marks are above 70%
const students = [{
  name: 'John',
  age: 12,
  percentage: '81%'
},
{
  name: 'Sean',
  age: 12,
  percentage: '60%'
},
{
  name: 'Tony',
  age: 12,
  percentage: '72%'
}];
console.log(students.filter(student => parseInt(student.percentage) > 70));


// Get total sum of value
const inventory = [
  {type:   "machine", value: 5000, isPresent: true},
  {type:   "machine", value:  650, isPresent: true},
  {type:    "chairs", value:   10, isPresent: false},
  {type: "furniture", value: 2400, isPresent: false},
  {type: "furniture", value: 1200, isPresent: true},
  {type:   "machine", value:   77, isPresent: true}
];
console.log(inventory.reduce((acc, item)=> acc += (item.value), 0));