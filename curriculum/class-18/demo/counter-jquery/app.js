'use strict';

$('#incrementor').on('click', handleClick);

function handleClick(e) {
  e.preventDefault();

  // read what is in the span
  // interpret it as an integer
  // increment and re-save in span

  let count = parseInt($('#count').html());

  count++;
  $('#count').html(count);
}
