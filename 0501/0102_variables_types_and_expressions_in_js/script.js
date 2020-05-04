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

/* 
let myVariable = 5
undefined
myVariable = `apple`
"apple"
myVariable = 6
6
let myArray = [3, 5, 6, 2, 22]
undefined
myArray = [`Claire`, `Mark`, `Susan`];
Array(3) [ "Claire", "Mark", "Susan" ]

let myOtherArray = [3, 12, true, `Hello`];
undefined
console.log(myArray[0]);
undefined
Claire debugger eval code:1:9
myArray[0] = `Peter`;
"Peter"
console.log(myArray.length);
undefined
3 debugger eval code:1:9
myArray.push(`Julia`);
4
let names = [`Andi`, `Barbi`, `Eva`, `Betti`];
undefined
console.log(names[2]);
undefined
Eva debugger eval code:1:9
console.log(names[2].length);
undefined
3 debugger eval code:1:9
names.push(`Gabi`);
5
names[0] = `Gabor`;
"Gabor"
console.log(names);
undefined
Array(5) [ "Gabor", "Barbi", "Eva", "Betti", "Gabi" ]
debugger eval code:1:9
console.log(names).lenght;
TypeError: console.log(...) is undefined
debugger eval code:1:9
Array(5) [ "Gabor", "Barbi", "Eva", "Betti", "Gabi" ]
debugger eval code:1:9
console.log(names.length);
undefined
5 debugger eval code:1:9
trueOrFalse = 4 >= (names.length);
false
trueOrFalse = 4 <= (names.length);
true
trueOrFalse = 4 < (names.length);
true
trueOrFalse = 4 === (names.length);
false
trueOrFalse = 4 > (names.length);
false
let post = {
  author: "Bill Gates",
  content: "Online communication will change how companies work",
  date: "2020-04-01 18:06",
};
undefined
console.log(post[`author`]);
undefined
Bill Gates debugger eval code:1:9
console.log(post.author);
undefined
Bill Gates debugger eval code:1:9
post.likes = 11043;
11043
console.log(post);
undefined
Object { author: "Bill Gates", content: "Online communication will change how companies work", date: "2020-04-01 18:06", likes: 11043 }
debugger eval code:1:9
let tarolo = {field:`color`}
undefined
field = `colors`;
"colors"
let colors = [`red`, `green`, `blue`, `lime`];
undefined
tarolo.field2 = `hasManyColors`;
"hasManyColors"
console.log(tarolo);
undefined
Object { field: "color", field2: "hasManyColors" }
debugger eval code:1:9
let hasManyColors = [`pink`, `orange`, `purple`, `grey`];
undefined
trueOrFalse = 3 < (hasManyColors.neght);
false
trueOrFalse = 3 < (hasManyColors.neght);
false
trueOrFalse = 3 < (hasManyColors.leght);
false
console.log(hasManyColors.length);
undefined
4 debugger eval code:1:9
trueOrFalse = 3 < (hasManyColors.length);
true
trueOrFalse = 3 <= (hasManyColors.length);
true
trueOrFalse = 3 >= (hasManyColors.length);
false
trueOrFalse = 3 === (hasManyColors.length);
false
field2.hasManyColors = myObject.colors.length > 3;
ReferenceError: field2 is not defined
debugger eval code:1:1
tarolo.field3 = `hasMoreAndMoreColors`;
"hasMoreAndMoreColors"
let hasMoreAndMoreColors = field.colors.lenght > 3;
TypeError: field.colors is undefined
debugger eval code:1:28
let hasMoreAndMoreColors = field.color.lenght > 3;
SyntaxError: redeclaration of let hasMoreAndMoreColors
debugger eval code:1:1
hasMoreAndMoreColors = field.colors.lenght > 3;
TypeError: field.colors is undefined
debugger eval code:1:1
console.log(tarolo)
undefined
Object { field: "color", field2: "hasManyColors", field3: "hasMoreAndMoreColors" }
debugger eval code:1:9
let myObject = { colors: ["purple", "orange", "blue", "pink"] };
undefined
myObject.hasManyColors = myObject.colors.length > 3;
true
console.log(myObject);
undefined
Object { colors: (4) […], hasManyColors: true }
debugger eval code:1:9
console.log(hasManyColors);
undefined
Array(4) [ "pink", "orange", "purple", "grey" ]
debugger eval code:1:9
console.log(myObject[hasManyColors]);
undefined
undefined debugger eval code:1:9
*/

