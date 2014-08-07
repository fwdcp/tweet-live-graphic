$('#tweetfeature-change-tweet').click(function() {
  $.getJSON('https://api.twitter.com/1/statuses/oembed.json?callback=?', {
    url: $('#tweetfeature-tweet').val(),
    maxwidth: 450,
    align: 'center'
  }, function(data) {
    if (data.html) {
      nodecg.sendMessage('tweetfeatureChangeTweet', {
        tweet: data.html
      });
    }
  });
});

$('#tweetfeature-show').click(function() {
  nodecg.sendMessage('tweetfeatureShow');
});

$('#tweetfeature-hide').click(function() {
  nodecg.sendMessage('tweetfeatureHide');
});

$('#tweetfeature-display-timed').click(function() {
  nodecg.sendMessage('tweetfeatureDisplayTimed', {time: $('#tweetfeature-time').val()});
});
