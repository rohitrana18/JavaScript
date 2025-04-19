const name = "Rohit "
const repoCount = 2    // old way to add two strings 
console.log(name + repoCount )

console.log(`My name is ${name} and my repoCount is ${repoCount}`) // know as string interpretation .Benefit:- can add multipe functionality to the string on the go easily.

// Another way to create string

const string = new String("Rohit") // if we run it in console it will provide key value pair as well.
//console.log(string[3]); // for determining the key value pair.

// Methods for string
console.log(string.length); // Method to find length of a string.
//console.log(string.toUpperCase());
//console.log(string.toLowerCase());
console.log(string.charAt(4));
console.log(string.indexOf('h'));




