// Third part:
console.log('Script file is loaded.');

$('h1').html('This is done by <em> Javascript</em>!');
$('h2').toggleClass('blue');
$('h2').toggleClass('blue');

let name = 'Adam';
let age = 34;

age = age + 5;

function myLittleFunction() {
    // condition: number of ps is smaller than 5
    // <, >, <=, >=, ===, !==
    if ($('p').lenght < 5) {
        $('main').append('<p>A p is an appended in the main.</p>');
    } else {
        console.log('We reached the max par number');
    }
    $('p').css('border', '1px solid red');
    $('p').css('padding', '10px');
}

myLittleFunction();
myLittleFunction();

$('#add').click(myLittleFunction);
$('#remove').click(function () {
    $('p:last-child').remove();
});


// Fourth part:

/* if (CSSCondition that true or false) {
    //condition is true
    } else {
        //condition is false
    } */

let colors = ['orange', 'yellow', 'blue', 'lime', 'magenta'];

colors.forEach(function (color) {
    $('#box-container').append('<div class="box"></div>');
    $('.box:last-child').css('background', color);
});

for (let i = 0; i < 100; i++) {
  console.log(i);
 }

// for (let i = 0; i < 100; i = i++) {
// console.log(i);
// }

/* $('.box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[0]);
$('.box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[1]);
$('.box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[2]);
$('.box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[3]);
$('.box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[4]); */

// single line comment

/* 
Multiple
lines
of comments
*/

// First part

/* 1+1
2
12-5
7
4*3
12
15/6
2.5
17*12
204
let age;
undefined
age = 34
34
age +5
39
age/5
6.8
age=48/8
6
let numberOfLegs = 4
undefined
numberOfLegs * 2
8
let numberOfLegs = 2
SyntaxError: redeclaration of let numberOfLegs
debugger eval code:1:1
let numberOfLegs = 4
SyntaxError: redeclaration of let numberOfLegs
debugger eval code:1:1
numberOfLegs =2
2
numberOfLegs
2
let name = Adam
ReferenceError: Adam is not defined
debugger eval code:1:12
let name = Adam
SyntaxError: redeclaration of let name
debugger eval code:1:1
let name = 'Adam'
SyntaxError: redeclaration of let name
debugger eval code:1:1
name
undefined
namename = "Egg"
"Egg"
name
undefined
name = 'StayAtHome'
"StayAtHome"
let sentence = "That person's cat."
undefined
sentence = 'He said: OK.'
"He said: OK."
sentence = 'He said: OK.'
"He said: OK."
sentence = 'He said: "Ok."'
"He said: \"Ok.\""
let backtick = 'backtick'
undefined
let oldEnoughToDrive = true
undefined
34 + 5
39
'Helo,' + name
"Helo,undefined"
'Helo, ' + name
"Helo, undefined"
name = StayAtHome
ReferenceError: StayAtHome is not defined
debugger eval code:1:1
name = 'StayAtHome'
"StayAtHome"
'Helo, ' + name
"Helo, StayAtHome"
'Helo, ' + name + 43 + 'another string'
"Helo, StayAtHome43another string"
'11' + '23'
"1123"
true && true
true
true && false
false
false && false */

