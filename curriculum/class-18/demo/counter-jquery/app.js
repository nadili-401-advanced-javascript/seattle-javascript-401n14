$('#add').on('click', handleClick);

function handleClick(event) {
  event.preventDefault();

  let count = parseInt($('#count').html());
  count++;
  $('#count').html(count);
}
