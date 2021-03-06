// Select a random quote by index #
var result = Math.floor(Math.random() * quotes.length);
// Declare the quote as a variable
var quote = quotes[result].quote;
// Insert the quote with quotation marks
document.getElementById("quote").innerHTML = "\"" + quote + "\"";