// this is an inline comment, the browser will ignore it

/*
  this is a multiline comment
  the browser will ignore the whole block
*/

//operation: + - * / %
// %: osztás utáni maradék! 
//operator: =

//variables: a name-value pair and can be defined/declared with several different keywords, like: let, var, const
//let: Declares a block scope local variable, optionally initializing it to a value.
//var: Declares a variable, optionally initializing it to a value.
//const: Declares a read-only named constant.

//JavaScript we use now 3 different primitive (basic) data types: number, string, boolean
//number: any number, both integer and rational numbers
//string: they represents any text or a single character
//boolean: it has two values true or false

//Operators
//which can be used with boolean values are called logical operators,
//the most common ones are: or: ||, and: &&, not: !, equals: ===, not equals: !==

//Strings $
//represents any text or character `, ""
//we used the backtick ` instead of simple quotation marks and surrounded the variable with ${...}

//.lenght: this is a sting property, count of characters in the string.

//Arrays:
//are like a set of boxes. You can put something into each box and then you can access the boxes by their index (order).

//Objects are again sets of boxes, but here you can access the boxes by their names (keys).
//used to describe real life entities like a facebook post, which has a “content”, “author”, “date” and other

//Building blocks: assigment (= 12), condition (if), loops

//Functions: let payBill = (amount, beneficiary) => {transfer amount money to the beneficiary};


console.log(`author: Gábor Tálosi`);
console.log(`0501/01/04 Basic building blocks in JavaScript`)

let myVariable = false;
myVariable = true;
if (myVariable === true) {
  console.log('The condition has been evaluated to true');
}

let a = 7;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
}
a = 2;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
}

bookCount = 10;
for (let i = 0; i < bookCount; i++) {
  // here comes the code which moves the books
  // this block will be repeated bookCount times
  console.log(i);
};
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
console.log(`---`);

bookCount = 10;
for (let i = 0; i < bookCount; i++) {
  // here comes the code which moves the books
  // this block will be repeated bookCount times
console.log(i + 1);
};
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
console.log(`---`);

for (let i = 2; i < 20; i = i + 2) {
  console.log(i);
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
console.log(`---`);



