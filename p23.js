let car = 'thar';
let age = 25;
let isSunny = true;
let fruits = ['apple', 'banana', 'cherry'];
let color = 'red';

console.log("Tests for equality and inequality with strings:");
console.log("Test 1: Is car == 'thar'? I predict True.");
console.log(car == 'thar');

console.log("Test 2: Is car != 'honda'? I predict True.");
console.log(car != 'honda');

console.log("Test 3: Is color == 'blue'? I predict False.");
console.log(color == 'blue');

console.log("Test 4: Is color != 'red'? I predict False.");
console.log(color != 'red');

console.log("Tests using the lowercase function:");
console.log("Test 5: Is car.toLowerCase() == 'THAR'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

console.log("Test 6: Is color.toLowerCase() == 'RED'? I predict True.");
console.log(color.toLowerCase() == 'red');

console.log("Numerical tests involving equality and inequality:");
console.log("Test 7: Is age === 25? I predict True.");
console.log(age === 25);

console.log("Test 8: Is age !== '25'? I predict True.");
console.log(age !== '25');

console.log("Test 9: Is age > 30? I predict False.");
console.log(age > 30);

console.log("Test 10: Is age < 18? I predict False.");
console.log(age < 18);

console.log("Test 11: Is age >= 25? I predict True.");
console.log(age >= 25);

console.log("Test 12: Is age <= 20? I predict False.");
console.log(age <= 20);

console.log("Tests using 'and' and 'or' operators:");
console.log("Test 13: Is age > 20 && isSunny? I predict True.");
console.log(age > 20 && isSunny);

console.log("Test 14: Is age < 20 || isSunny? I predict True.");
console.log(age < 20 || isSunny);

console.log("Test whether an item is in an array:");
console.log("Test 15: Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));

console.log("Test whether an item is not in an array:");
console.log("Test 16: Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
