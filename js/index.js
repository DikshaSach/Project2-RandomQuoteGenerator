var quotes = [
["Don't cry because it's over, smile because it happened.","Dr.Suess"],
  ["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.","Marilyn Monroe"],
  ["Be yourself; everyone else is already taken.","Oscar Wilde"],
  ["Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.","Bernard M. Baruch"],
  ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe","Albert Einstein"]
];

$("#quotebutton").click( function() {
    var random = Math.floor(Math.random()*quotes.length);
    var item = quotes[random][0];
    var author = quotes[random][1]
   
    $(".quote").html("<p class='item'>" + item + "</p><p class='author'>" + author + "</p>");
   
 
});