console.log(2>1);
console.log(2<1);
console.log(2>=1);  // Simple comparison
console.log(2==1);
console.log(2!=1);


console.log("2">1);   /*comparison of two numbers 
                      having different data types*/
console.log(3>"10");


console.log(null >0);
console.log(null ==0);
console.log(null >=0); /*Reason:- Equality check == and comparison < > >= <= works differently. Comparison treats null as number. That's why null >=0 is true  */



// === Strict check
console.log("2" ===2); // Here it will check number as well as it's data type.