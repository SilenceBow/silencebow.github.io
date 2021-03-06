// regex replace \t with \n on export for formatting

var quotes = [
  {
    quote: "I would not chug this Mountain Dew Throwback for a million dollars.",
    link: "https://youtu.be/Lm_XqaFh1uY?t=859",
    duration: "5000"
  },
  {
    quote: "I drank like three or four little chugs of this and my balls hurt. Right now. It has to be related.",
    link: "https://youtu.be/Lm_XqaFh1uY?t=951",
    duration: "10000"
  },
  {
    quote: "I value non-testicular pain.",
    link: "https://youtu.be/Lm_XqaFh1uY?t=968",
    duration: "5000"
  },
  {
    quote: "Hey Mr. President, uhh, can you like chug this Mountain Dew and shit your pants?",
    link: "https://youtu.be/Lm_XqaFh1uY?t=1008",
    duration: "6000"
  },
  {
    quote: "When Abraham Lincoln fuckin' created the universe this is not what he thought was gonna happen.",
    link: "https://youtu.be/Lm_XqaFh1uY?t=1123",
    duration: "5000"
  },
  {
    quote: "No, I'm not gonna turn this into like a fetish stream. I'm not doing that.",
    link: "https://youtu.be/Lm_XqaFh1uY?t=1430",
    duration: "9000"
  },
  {
    quote: "What, you're telling me I just can't slide like a DVD player into my pants and walk out? Why not?",
    link: "https://youtu.be/Lm_XqaFh1uY?t=1749",
    duration: "9000"
  },
  {
    quote: "No that's actually true, I'm not making that up, that's real. This is like the 5% time (sic) when I'm saying something real.",
    link: "https://youtu.be/Lm_XqaFh1uY?t=2222",
    duration: "0"
  },
  {
    quote: "Welcome to Dark Souls games, if your back's in a corner, you may as well go microwave a fuckin' burrito.",
    link: "https://youtu.be/8Kpu58900Kk?t=220",
    duration: "8000"
  },
  {
    quote: "He kicked me, Mom, he kicked me in the face from across the fucking game!",
    link: "https://youtu.be/8Kpu58900Kk?t=408",
    duration: "5000"
  },
  {
    quote: "Yeah, take a picture of my mouth!",
    link: "https://youtu.be/olJq4Vp-64M?t=518",
    duration: "2000"
  },
  {
    quote: "Hey, get ready for some fake reactions.",
    link: "https://youtu.be/ZdnRu3PLZ-U?t=9",
    duration: "3000"
  },
  {
    quote: "Suck my fuckin' bum.",
    link: "https://youtu.be/ZdnRu3PLZ-U?t=815",
    duration: "3000"
  },
  {
    quote: "Maybe like 5% of you are chumps.",
    link: "https://youtu.be/ZdnRu3PLZ-U?t=917",
    duration: "3000"
  },
  {
    quote: "You ever shoved a wrench up your ass?",
    link: "https://youtu.be/xH7fcqrvEIY?t=424",
    duration: "3000"
  },
  {
    quote: "Shit in my face.",
    link: "https://youtu.be/KKxq7OxBsoY?t=361",
    duration: "3000"
  },
  {
    quote: "And my hand is just caked with shit.",
    link: "https://youtu.be/HR4cGhdd1Ds?t=2852",
    duration: "5000"
  },
  {
    quote: "Im on crack today, I'm gonna be honest with you.",
    link: "https://youtu.be/YaS8KkfLHA8?t=510",
    duration: "3000"
  },
  {
    quote: "Hey, shove those bone dragons up your ass, you fuckin' dick.",
    link: "https://youtu.be/L27Lmrnqc_0?t=1140",
    duration: "5000"
  },
  {
    quote: "Pineapple on pizza is fucking disgusting.",
    link: "https://youtu.be/WBdtiBcCgoE?t=560",
    duration: "4000"
  },
  {
    quote: "The Witcher 3 is not a good game at all. I think it should never have received even one award.",
    link: "https://youtu.be/WBdtiBcCgoE?t=592",
    duration: "7000"
  },
  {
    quote: "Half-Life 1 and Half-Life 2, like I mean really that whole company in general just made nothing but 4/10 games.",
    link: "https://youtu.be/WBdtiBcCgoE?t=605",
    duration: "7000"
  },
  {
    quote: "No, I'm not going to shave my armpits. I manage my armpits.",
    link: "https://youtu.be/WBdtiBcCgoE?t=693",
    duration: "6000"
  },
  {
    quote: "Don't you hate it when you have chicken bones in your coffee?",
    link: "https://youtu.be/uVBZew0eLQY?t=350",
    duration: "2000"
  },
  {
    quote: "Coffee, Cheetos, Chicken.",
    link: "https://youtu.be/6x7ezLiR4rY?t=0",
    duration: "0"
  },
  {
    quote: "Get ready for a real jock-shocker.",
    link: "https://youtu.be/ydo2GNXEh2E?t=420",
    duration: "3000"
  },
  {
    quote: "Hey, how about you suck a fart outta my ass.",
    link: "https://youtu.be/ydo2GNXEh2E?t=563",
    duration: "3000"
  },
  {
    quote: "Do you eat ass?",
    link: "https://youtu.be/dEU005uOMlk?t=211",
    duration: "3000"
  },
  {
    quote: "Do you know what it's like to shit?",
    link: "unknown",
    duration: "0"
  },
  {
    quote: "I'm hiding my penis because people are outta control!",
    link: "https://youtu.be/pbMkyQdo2x8?t=1032",
    duration: "6000"
  },
  {
    quote: "I sound like an attitude boy.",
    link: "https://youtu.be/4-QMpR1L6XM?t=158",
    duration: "3000"
  },
  {
    quote: "Jell-O is somebody spitting a cold loogie down your throat.",
    link: "https://youtu.be/PHUjZ91boic?t=213",
    duration: "5000"
  },
  {
    quote: "Everybody knows at Burger King there are fuckin' ants everywhere.",
    link: "https://youtu.be/_3Mg3x5xsmU?t=60",
    duration: "7000"
  },
  {
    quote: "I can't call Luigi anymore, he called up Verizon and had my number fuckin' blocked. Permanently.",
    link: "https://youtu.be/DtXwqjz0MYE?t=436",
    duration: "9000"
  },
  {
    quote: "Am I the porn?",
    link: "https://youtu.be/aprn0dzKHww?t=78",
    duration: "2000"
  },
  {
    quote: "Why can't we just eat shit?",
    link: "https://youtu.be/CUUMJljcFAQ?t=65",
    duration: "3000"
  },
  {
    quote: "I'm on drugs you motherfuckers!",
    link: "https://youtu.be/X2C9dSRi9S8?t=282",
    duration: "3000"
  },
  {
    quote: "I would suck to be him.",
    link: "https://youtu.be/tPKfNqTgvfE?t=541",
    duration: "2000"
  },
  {
    quote: "If you can't accept me at my worst, obey your thirst.",
    link: "https://youtu.be/h8lwnXjGZ5s?t=2",
    duration: "5000"
  },
  {
    quote: "It's over!",
    link: "https://youtu.be/N_gwh2JDdwE?t=25",
    duration: "2000"
  },
  {
    quote: "I wake up, I look at the ceiling, I go 'Yo! Merry Christmas!', and then I diarrhea. Every single morning.",
    link: "https://youtu.be/_DsGrb-tJI0?t=362",
    duration: "7000"
  },
  {
    quote: "You can pee on my all you want, I don't care.",
    link: "https://youtu.be/otrkNH3FFcg?t=5913",
    duration: "3000"
  },
  {
    quote: "Piss on me, piss in my face!",
    link: "https://youtu.be/otrkNH3FFcg?t=5917",
    duration: "3000"
  },
  {
    quote: "Gonna shit in everybody is this room's cereal.",
    link: "https://youtu.be/CKsW2g0NZMs?t=36",
    duration: "4000"
  },
  {
    quote: "If I don't get three headshots in a row right now, I'm going to reach into the toilet and eat my own shit.",
    link: "https://youtu.be/CKsW2g0NZMs?t=43",
    duration: "8000"
  },
  {
    quote: "I'll be back, I gotta go eat my own shit.",
    link: "https://youtu.be/CKsW2g0NZMs?t=57",
    duration: "3000"
  },
  // {
  //   quote: "This is the claimed video for error testing",
  //   link: "https://youtu.be/HR4cGhdd1Ds?t=2852",
  //   duration: "5000"
  // },
];



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
