$(document).ready(function() {
  
  const $quoteContainer = $('.js-quote-text');
  const $quoteReroll = $('.js-quote-reload');

  const getQuote = () => {
    $.getJSON('https://api.whatdoestrumpthink.com/api/v1/quotes/random', (quote) => {
      $quoteContainer.html(`"${quote.message}"`);
    }); 
  };
  getQuote();

  $quoteReroll.on('click', function(){
    getQuote();
  });

  const $twitterButton = $('.twitter-share-button');
  let referer = "http://istrumpstilladicktoday.com";
  let rawText = "Hey @realDonaldTrump, You're a dick! Courtesy of your friends at - ";
  let text = encodeURI(rawText);
  let via = "misterhamm";

  let twitterHref = `https://twitter.com/intent/tweet?original_referer=${referer}&text=${text}&tw_p=tweetbutton&url=${referer}&via=${via}`;

  $twitterButton.on('click', (e) => {
    e.preventDefault();
    console.log(twitterHref);
    window.open(twitterHref, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  });

});