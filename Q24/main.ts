let car: string = 'tesla';
let age: number = 30;
let name: string = 'Bob';
let isLoggedIn: boolean = false;
let score: number = 70;
let fruits: string[] = ['apple', 'banana', 'cherry'];

//Tests for equality and inequality with strings
console.log("Is car == 'tesla'? I predict True.");
console.log(car === 'tesla');

console.log("Is car != 'ford'? I predict True.");
console.log(car !== 'ford');

console.log("Is name == 'Alice'? I predict False.");
console.log(name === 'Alice');

console.log("Is name != 'Bob'? I predict False.");
console.log(name !== 'Bob');

//Tests using the lower case function
console.log("Is car.toLowerCase() == 'tesla'? I predict True.");
console.log(car.toLowerCase() === 'tesla');

console.log("Is name.toLowerCase() == 'bob'? I predict True.");
console.log(name.toLowerCase() === 'bob');

console.log("Is car.toLowerCase() == 'TESLA'? I predict False.");
console.log(car.toLowerCase() === 'TESLA');

console.log("Is name.toLowerCase() == 'alice'? I predict False.");
console.log(name.toLowerCase() === 'alice');

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is age == 30? I predict True.");
console.log(age === 30);

console.log("Is age != 25? I predict True.");
console.log(age !== 25);

console.log("Is score > 60? I predict True.");
console.log(score > 60);

console.log("Is score < 80? I predict True.");
console.log(score < 80);

console.log("Is age >= 30? I predict True.");
console.log(age >= 30);

console.log("Is score <= 70? I predict True.");
console.log(score <= 70);

console.log("Is age == 25? I predict False.");
console.log(age === 25);

console.log("Is score > 80? I predict False.");
console.log(score > 80);

//Tests using "and" and "or" operators
console.log("Is age > 20 and score < 80? I predict True.");
console.log(age > 20 && score < 80);

console.log("Is age < 20 or score > 60? I predict True.");
console.log(age < 20 || score > 60);

console.log("Is age > 35 and score < 70? I predict False.");
console.log(age > 35 && score < 70);

console.log("Is age < 25 or score > 80? I predict False.");
console.log(age < 25 || score > 80);

//Test whether an item is in an array
console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes('apple'));

console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.includes('grape'));

//Test whether an item is not in an array
console.log("Is 'pear' not in fruits? I predict True.");
console.log(!fruits.includes('pear'));

console.log("Is 'banana' not in fruits? I predict False.");
console.log(!fruits.includes('banana'));
