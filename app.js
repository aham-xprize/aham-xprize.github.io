let ids = ['step1-section', 'step2-section', 'step3-section'];
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
var done = false;

function navigateToSection(id) {
    switch (id) {
        case 'step1':
            toggleSection(ids[0]);
            break;
        case 'step2':
            toggleSection(ids[1]);
            break;
        case 'step3':
            toggleSection(ids[2]);
            break;
    }
}

function toggleSection(id) {
    let tabs = document.getElementsByClassName('nav-link');
    for (let i = 0; i < ids.length; i++) {
        tabs[i].classList.remove('active');
        document.getElementById(ids[i]).style.display = 'none';
        if (ids[i] === id) {
            tabs[i].classList.add('active');
            let el = document.getElementById(ids[i]);
            el.style.display = 'block';
        }
    }
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player1', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('player2', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('player3', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    // event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}