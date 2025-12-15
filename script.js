//Fundamentals of JavaScript
// Array and Objects
// Functions and return
// async js coding
// Foreach, map, filter, find, indexOf

// Foreach doesnot give new array 
// let colors = ["red", "orange"]
// let newColor = [];
// colors.forEach(color => {
//     newColor.push(color);
// });
// console.log(newColor);

// Map
// let arr1 = ["A", "B", "C", "D", "E"]
// let arr = arr1.map(function(val){
//     return val;
// })
// console.log(arr)


// Fitler
// let arr = [1, 2, 3, 4, 5, 6]
// let newArr = arr.filter(function(val){
//     if(val>3) return true;
// })
// let newArr = arr.filter(val => val <= 3)
// console.log(newArr);

//Find
// let foundElement = array.find(callback(element, index, array) {
//     // return true for the element you want to find
// });
// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ];
// let user = users.find(u => u.age > 20);
// console.log(user);


// //Reduce  reduce ma accumulator lai first element diyena vane array ko first element linxa
// array.reduce((accumulator, currentValue, index, array) => {
//   return newAccumulator;
// }, initialValue);
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana','mango','apple'];

// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit]= (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(count);
// { apple: 2, banana: 2, orange: 1 }

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana','mango','apple'];
// const add = fruits.reduce((acc, fruit) => acc + ', ' + fruit,)
// console.log(add);

//indexOf
// array.indexOf(searchElement, fromIndex)
// const fruits = ["apple", "banana", "cherry", "banana"];

// console.log(fruits.indexOf("banana")); // 1 (first occurrence)
// console.log(fruits.indexOf("banana", 2)); // 3 (start searching from index 2)
// console.log(fruits.indexOf("mango")); // -1 (not found)

// objects
// const foundUser = Object.values(users).find(u => u.age > 28);
// console.log(foundUser); // { name: "Bob", age: 30 }

//Functions
//You can get the length of functions, parameters are the length of functions
//function display(a,b,c,d) then length of function is 4 =a,b,c,d;


