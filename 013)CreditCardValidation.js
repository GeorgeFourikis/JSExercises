//Write a function that validates a given credit card.
// The rules of a valid card number

// 1)Number must be 16 digits, all of them must be numbers
// 2)You must have at least two different digits represented (all of the digits cannot be the same)
// 3)The final digit must be even
// 4)The sum of all the digits must be greater than 16


function validateCreditCard(creditCardNum){
  //code goes here
};

/**** tests *****/
console.log(validateCreditCard('9999-9999-8888-0000')); //true
console.log(validateCreditCard('6666-6666-6666-1666')); //true
console.log(validateCreditCard('a923-3211-9c01-1112')); //false
console.log(validateCreditCard('4444-4444-4444-4444')); //false
console.log(validateCreditCard('1211-1111-1111-1112')); //true