//every jQuery action starts with $(selector) where selector is a valid css selector. 
$('#fox-1').text('Macrotis');
$('#fox-2').css('border','solid purple'); 
$('div').css('background', 'yellow');

let color = "purple";
let number = 100;
let word = "cool";

if (color === 'purple') {$('.north').css('background', 'purple')}
if (number > 100) {$('.east').text("whoah, that's a big number.")} else {$(".east").text("just a regular number, please.")}
if (word === 'cool') {$('.south').text('Power of DOM')} else {$('.west').text('Power of DOM')}

$('body').append(
  '<h4>Hello World!</h4>'
);

let array = [`Peti`, `Laci`, `Tamás`, `Gabi`]
$('.li0').text(array[0],)
$('.li1').text(array[1],)
$('.li2').text(array[2],)
$('.li3').text(array[3],).css('font-weight', 'bold')

let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$("h5").text ("Added with javascript");
$("h6").text ("This block was added using JavaScript's jQuery library. How awesome!");

//$(selector).on(eventType, function);
//The most common events are click and submit.
//$('p').on('click', () => {do something}); / $('p').click(() => {same as before})


