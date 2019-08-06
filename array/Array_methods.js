let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

console.log(fruits.indexOf('Apple')) // 3

let res = fruits.join(); // joins all array elements into a string using comma seperator

console.log(res); // Banana * Orange * Apple * Mango

console.log(fruits.pop()) // 

console.log(fruits.push("Mango"))

console.log(fruits) // [ 'Banana', 'Orange', 'Apple', 'Grapes' ]

console.log(fruits.toString()); // Banana,Orange,Apple,Grapes

// shift is used to delete items from begining of array

let shift = fruits.shift(); 

console.log(shift); // Banana


// unshift method is used to insert items at begining
console.log(fruits.unshift("Banana")) 


fruits.splice(2, 2, "Lemon", "Kiwi"); //
console.log(fruits)

//slice methos is used to create new array

var citrus = fruits.slice(2); // [ 'Lemon', 'Apple', 'Mango' ]

var citrus1 = fruits.slice(0,2); // [ 'Banana', 'Orange' ]

console.log(citrus1)


let veg = ['potato','toamto','bringle'];

let mix = veg.concat(fruits);

console.log(mix)  // ['potato','toamto','bringle','Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
