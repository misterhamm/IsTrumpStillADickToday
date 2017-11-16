$(document).ready(function() {
  
  const $quoteContainer = $('.quote');
  const $quoteReroll = $('.quote-reload');

  const getQuote = () => {
    $.getJSON('https://api.whatdoestrumpthink.com/api/v1/quotes/random', (quote) => {
      $quoteContainer.html(`"${quote.message}"`);
    }); 
  };
  getQuote();

  $quoteReroll.on('click', function(){
    getQuote();
  });

});