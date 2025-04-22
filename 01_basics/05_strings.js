const name = "Rohit "
const repoCount = 2    // old way to add two strings 
console.log(name + repoCount )

console.log(`My name is ${name} and my repoCount is ${repoCount}`) // know as string interpretation .Benefit:- can add multipe functionality to the string on the go easily.

// Another way to create string

const string = new String("Rohit-Rana") // if we run it in console it will provide key value pair as well.
console.log(string[3]); // for determining the key value pair.

// Methods for string
console.log(string.length); // Method to find length of a string.
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.charAt(4));
console.log(string.indexOf('h'));

const Newstring= string.substring(0 , 7)
console.log(Newstring)
// In substring method the end of string index given by us will be not included.

const anotherstring = string.slice(-8 , 6)
console.log(anotherstring)
// In slice method we can assign -ve  number as an index but in substring method we can't do it.

const newstring = "     Rohit   " 
console.log(newstring);
console.log(newstring.trim())
// We use trim to remove unnecessary space in the string to save the memory.

const url = "https://Rohit.com/Rohit%1782Rana"
console.log(url.replace('%1782', ' '));
// Browser don't understand spaces so we use replace method to remove the unnecessary thing or to add space if needed.

console.log(url.includes('Rohit'));
// to know that the searched element present in the string or not.

console.log(string.split('-'));
// use to split a string by giving seperator or (seperator and string) both.
// seperator can be anything like '-', ' ' 





