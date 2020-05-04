//every jQuery action starts with $(selector) where selector is a valid css selector. 

//$(selector).on(eventType, function);
//The most common events are click and submit.
//$('p').on('click', () => {do something}); / $('p').click(() => {same as before})

let counter = 0;

$('.increase').click(() => {
  counter = counter + 1;
  $('h2').text(counter);
});

$('.decrease').click(() => {
  counter--;
  $('h2').text(counter);
});

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

$('.add').click(() => {
  $('ul').append(`<li>${$('input').val()}</li>`);
  $('input').val('');
});