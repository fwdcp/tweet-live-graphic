$(document).on('ncgReady', function () {

    nodecg.listenFor('tweetfeatureChangeTweet', changeTweet);
    nodecg.listenFor('tweetfeatureShow', showTweet);
    nodecg.listenFor('tweetfeatureHide', hideTweet);
    nodecg.listenFor('tweetfeatureDisplayTimed', displayTimed);

    function changeTweet(data) {
        $('#tweetfeature-tweet').empty().html(data.tweet);
    }

    function showTweet() {
        var show = new TimelineLite({paused: true});

        show.to($('#tweetfeature'), 0.5, {left: 0, ease: Quad.easeOut}, 0)
            .to($('#tweetfeature-tweet-container'), 1, {className: 'visible', ease: Quad.easeOut}, 0.5)
            .play();
    }

    function hideTweet() {
        var hide = new TimelineLite({paused: true});

        hide.to($('#tweetfeature-tweet-container'), 1, {className: 'invisible', ease: Quad.easeIn}, 0)
            .to($('#tweetfeature'), 0.5, {left: "-480px", ease: Quad.easeIn}, 1)
            .play();
    }

    function displayTimed(data) {
        showTweet();

        setTimeout(hideTweet, data.time * 1000);
    }

});

