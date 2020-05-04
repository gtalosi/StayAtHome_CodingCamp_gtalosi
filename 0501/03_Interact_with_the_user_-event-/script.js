//$(selector).on(eventType, function);
//The most common events are click and submit.
//$('p').on('click', () => {do something}); / $('p').click(() => {same as before})


$('.button1').on('click',() => {console.log("the user clicked on the button 1")
$('body').append('<h5>You have clicked on button 1</h5>')
$('.button2, .button3').text('why not me?')
});

$('h3').on('click',() => {console.log("the user clikked into the title")});
$('h3').on('click',() => {
  $('body').append('<h4>You have clicked into the title</h4>');
  $('h3').css('color', 'purple');
});

$('.button2').on('click',() => {console.log("the user clicked on the button 1")
  $('body').append('<h5>You have clicked on button 2</h5>')
  $('.button1, .button3').text('why not me?')
});

$('.button3').on('click',() => {console.log("the user clicked on the button 3")
  $('body').append('<h5>You have clicked on button 3</h5>')
  $('.button2, .button1').text('why not me?')
  $('button').css('background-color', (document.getElementById("favColor").value))
});
console.log(document.getElementById("favColor").value);

function myFunction() {
  var x = document.getElementById("favColor").value;
  
}

