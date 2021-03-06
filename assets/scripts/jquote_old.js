// Select a random index #
var result = Math.floor(Math.random() * quotes.length);
// Declare the quote and link as variables
var quote = quotes[result].quote;
var link = quotes[result].link;
// The powerhouse of the cell
function page_load() {
  // Insert the quote text and give it quotation marks
  document.getElementById("quote").innerHTML = "\"" + quote + "\"";
  // If the link starts with https:// (if it's a link)
  if (link.startsWith("https://")) {
    // Set up the embed
    // Declare the embed, video id, and timestamp as variables
    var embed = document.getElementById("embed")
    var timestamp_index = link.lastIndexOf("?t=");
    var video_id = link.slice(17, timestamp_index);
    var timestamp = link.slice(timestamp_index + 3);
    // Concat the video id and timestamp into the embed link
    embed.setAttribute("src", "https://www.youtube-nocookie.com/embed/" + video_id + "?start=" + timestamp);
  }
}

function source() {
  if (link.startsWith("https://")) {
    embed.setAttribute("width", 560);
    embed.setAttribute("height", 315);
  } else {
    document.getElementById("jquote-source-link").innerHTML = "¯\\_(ツ)_/¯";
  }
}
