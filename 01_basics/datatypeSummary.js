/* Datatype categorize on the basis of :
1. How you store data in memory.
2. How you can access and retrive data from memory. */

// Primitive : Call by value

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt 

// Javascript is a dynamically typed language.

const score = 100
const score1 = 100.3

const isLoggedIn = false
const temperature = null
let userEmail;

const id = Symbol('123')
const id1 = Symbol('123')
console.log(id == id1);

const BigNumber = 9923537876853376389n  // for big Integer (Bigint).

// Non primitive(Reference type) : Call by reference
// Array , Objects , Functions

const heros = ["Batman", "Thor", "Joker"]  // Array

let myDetail = {
    name :"Rohit",        // Object
    age : 20,
}

const myFunction = function() {
    console.log("Hello World");
    }

    console.log(typeof BigNumber);
    
    // typeof null is undefined
    // typeof decimal value is number

    // typeof Array is object
    // Function is function



// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myinsta = "rohitrana183"
let anotherinsta = myinsta
 anotherinsta = "rohitranaa18"

console.log(anotherinsta);
console.log(myinsta);

let userone ={
    email: "Rana@google.com",
    upi: "user@ibl"

}

let usertwo = userone

usertwo.email = "rohit@google.com"
console.log(userone.email);
console.log(usertwo.email);

