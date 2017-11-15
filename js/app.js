$(document).ready(function() {
  
  const $quoteContainer = $('.quote');

  $.getJSON('https://api.whatdoestrumpthink.com/api/v1/quotes/random', (quote) => {
    $quoteContainer.html(`" ${quote.message} "`);
  }); 

});