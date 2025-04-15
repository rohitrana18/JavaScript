const accountId = 1237592
let accountEmail = "rohti@gmail.com"
var accountPassword = "987655433"
accountCity = "Hapur" // We can assign value without assigning variable but this is not good coding practice.


let accountState; // if no value assign in javascript then it considered as "Undefined".


//accountId = 4353 Not allowed because constant keyword cannot be changed.

accountEmail = "hii@google.com"
accountPassword = "62645863484"
accountCity = "Ghaziabad"

console.log(accountId);

/* Prefer not to use var because of issue
in block scope and functional scope */

console.table([accountPassword,accountEmail,accountCity,accountId,accountState])
