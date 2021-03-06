// Select a random quote by index #
var result = Math.floor(Math.random() * quotes.length);
// Declare the quote, link, and duration as variables
var quote = quotes[result].quote;
var link = quotes[result].link;
var duration = quotes[result].duration;
// Declare proper_link and embed for later
var proper_link;
var embed;

// If the link starts with https://youtu.be
if (link.startsWith("https://youtu.be")) {
  // Set link verify true
  proper_link = true;
  // Declare the video id and timestamp
  var video_id = link.slice(17, link.lastIndexOf("?t="));
  var timestamp = link.slice(link.lastIndexOf("?t=") + 3);
} else {
  proper_link = false;
}

// Insert the quote with quotation marks
function page_load() {
  document.getElementById("quote").innerHTML = "\"" + quote + "\"";
}

// Function for the source button
// Expand the embed if it's a link or set source_link text otherwise
function source() {
  if (proper_link) {
    embed.playVideo();
    document.getElementById("embed").setAttribute("height", 315);
    document.getElementById("source_link").setAttribute("href", "https://youtu.be/" + video_id + "?t=" + timestamp)
    document.getElementById("source_link").innerHTML = "Secret WIP pancake recipe";
  } else {
    document.getElementById("source_link").innerHTML = "¯\\_(ツ)_/¯";
  }
}


// Youtube Player API 
// https://developers.google.com/youtube/iframe_api_reference
// This code loads the IFrame Player API code asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create an <iframe> and player after the API code downloads
// The embed variable is set here
function onYouTubeIframeAPIReady() {
  embed = new YT.Player('embed', {
    height: '0',
    width: '560',
    videoId: video_id,
    playerVars: {
      start: timestamp,
      // origin: "silencebow.github.io",
      controls: "0",
      rel: "0"
    },
    events: {
      'onStateChange': on_embed_state_change,
      'onError': on_error
    }
  });
}

// When playing a video, the player should play for duration and then run playback_finished()
// Unless the duration is 0, then playback_finished() won't run
function on_embed_state_change(event) {
  if (event.data == YT.PlayerState.PLAYING && duration != "0") {
    setTimeout(playback_finished, duration);
  } else {
    return;
  }
}
// When duration is reached, pause and reset to the timestamp
// Also hide the embed again
function playback_finished() {
  embed.pauseVideo();
  embed.seekTo(timestamp);
  document.getElementById("embed").setAttribute("height", 0);
}
// If the video fails to play due to an embed error, give a link below the embed
// Embed errors include deleted or privated videos and copyright claim restrictions
function on_error(event) {
  document.getElementById("source_link").innerHTML = "Not working?";
  document.getElementById("source_link").setAttribute("href", link);
}
