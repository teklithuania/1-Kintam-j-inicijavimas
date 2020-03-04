var carName = "Volvo";
var x = 50;

console.log("----------------------------");

var x = 5;
var y = 10;
console.log(x + y);

console.log("---------------------------");

var x = 36;
var y = 258;
var z = x + y;
alert (z);
console.log(z);

console.log("---------------------------");

var firstName = ' '+"John", lastName = ' '+"Doe"+' ', age = 35;
console.log(firstName + lastName + age);

// The Fortune Teller 
// Why pay a fortune teller when you can just program your fortune yourself?

// 1. Store the following into variables: number of children, partner's name, geographic location, job title.
// 2. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var numberOfChildren = 20;
var partnersName = "Katie";
var geographicLocation = "Miami";
var jobTitle = "Lawyer";
console.log('You will be a ' + jobTitle + ' in ' + geographicLocation + ', and maried to ' + partnersName + ' with ' + numberOfChildren + ' kids!' + ' Just joking - man ;)');

console.log("---------------------------");

// // The Age Calculator
// Want to find out how old you'll be? Calculate it!

// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values. For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.

const birthYear = 1989;
let futureYear = 2025;
var age = futureYear - birthYear;
console.log('I will be either '+age+' or '+(age-1)+' in '+futureYear+'.');

console.log("---------------------------");

// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many times you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

const currentAge = 30;
let maximumAge = 70;
let amountPerDay = 4;
let daysInYear = 365;
let eat = ((maximumAge-currentAge)*daysInYear)*amountPerDay;
console.log('You will need ' + eat + ' euro' + ' to last you until the ripe old of ' + maximumAge + '.');

console.log("---------------------------");

// The Geometrizer
// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 3;
var circumference = Math.PI * 2 * radius;
console.log('The circumference is ' + circumference);

var area = Math.PI * radius * radius;
console.log('The area is ' + area);

// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celc1 = 32;
var faren1 = (celc1 * 9) / 5 +32;
console.log(celc1 + '°C' + ' is ' + faren1 + '°F.');

var faren2 = 136.4;
var celc2 = ((faren2 - 32) * 5) / 9;
console.log(faren2 + '°F' + ' is ' + celc2 + '°C' + '.');

