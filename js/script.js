/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

let quotes = [];
for (i = 0; i < 8; i++) {
  let quote = {
    quote: "",
    source: "",
    citation: "",
    year: ""
  };
  if (i === 0) {
    quote.quote =
      "If you just work on stuff that you like and you’re passionate about, you don’t have to have a master plan with how things will play out.";
    quote.source = "Mark Zuckerberg";
    quote.year = "2016";
  } else if (i === 1) {
    quote.quote =
      "Intelligence plus character—that is the goal of true education.";
    quote.source = "Dr. Martin Luther King Jr.";
    quote.citation =
      "“The Purpose of Education” from Morehouse College student newspaper, The Maroon Tiger";
    quote.year = "1947";
  } else if (i === 2) {
    quote.quote =
      "Strength does not come from physical capacity. It comes from an indomitable will.";
    quote.source = "Mahatma Ghandi";
    quote.year = "1932";
  } else if (i === 3) {
    quote.quote =
      "Nothing is a greater stranger to my breast, or a sin that my soul more abhors, than that black and detestable one, ingratitude.";
    quote.source = "George Washington";
    quote.year = "1754";
  } else if (i === 4) {
    quote.quote = "All men are by nature born equally free and independent.";
    quote.source = "George Mason";
    quote.year = "1749";
  } else if (i === 5) {
    quote.quote =
      "There’s some real utility in gratitude. It’s also good protection against the dangers of victimhood and resentment.";
    quote.source = "Jordan Peterson";
    quote.citation = "12 Rules for Life: An Antidote to Chaos";
    quote.year = "2018";
  } else if (i === 6) {
    quote.quote = "The truth is not for all men, but for those who seek it.";
    quote.source = "Ayn Rand";
    quote.citation = "Atlas Shrugged";
    quote.year = "1957";
  } else if (i === 7) {
    quote.quote = "You are what you do, not what you say.";
    quote.source = "Carl Jung";
    quote.year = "1934";
  }
  quotes.push(quote);
}

console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
