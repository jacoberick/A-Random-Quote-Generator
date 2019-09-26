/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
    For loop pushes a new quote into quotes array with properties being conditional based on index.
    Values are defined using dot notation with their corresponding properties.
    Additional properties(ie. citation, year) are also added to the array using dot notation.
***/

let quotes = [];
for (i = 0; i < 8; i++) {
  let quote = {
    quote: "",
    source: "",
    tag: ""
  };
  if (i === 0) {
    quote.quote =
      "If you just work on stuff that you like and you’re passionate about, you don’t have to have a master plan with how things will play out.";
    quote.source = "Mark Zuckerberg";
    quote.year = 2016;
    quote.tag = "Entrepreneurs";
  } else if (i === 1) {
    quote.quote =
      "Intelligence plus character—that is the goal of true education.";
    quote.source = "Dr. Martin Luther King Jr.";
    quote.citation =
      "“The Purpose of Education” from Morehouse College student newspaper, The Maroon Tiger";
    quote.year = 1947;
    quote.tag = "Historical Figures";
  } else if (i === 2) {
    quote.quote =
      "Strength does not come from physical capacity. It comes from an indomitable will.";
    quote.source = "Mahatma Ghandi";
    quote.year = 1932;
    quote.tag = "Historical Figures";
  } else if (i === 3) {
    quote.quote =
      "Nothing is a greater stranger to my breast, or a sin that my soul more abhors, than that black and detestable one, ingratitude.";
    quote.source = "George Washington";
    quote.year = 1754;
    quote.tag = "Historical Figures";
  } else if (i === 4) {
    quote.quote = "All men are by nature born equally free and independent.";
    quote.source = "George Mason";
    quote.year = 1749;
    quote.tag = "Historical Figures";
  } else if (i === 5) {
    quote.quote =
      "There’s some real utility in gratitude. It’s also good protection against the dangers of victimhood and resentment.";
    quote.source = "Jordan Peterson";
    quote.citation = "12 Rules for Life: An Antidote to Chaos";
    quote.year = 2018;
    quote.tag = "Psychologist";
  } else if (i === 6) {
    quote.quote = "The truth is not for all men, but for those who seek it.";
    quote.source = "Ayn Rand";
    quote.citation = "Atlas Shrugged";
    quote.year = 1957;
    quote.tag = "Philosophers";
  } else if (i === 7) {
    quote.quote = "You are what you do, not what you say.";
    quote.source = "Carl Jung";
    quote.year = 1934;
    quote.tag = "Psychologist";
  }
  quotes.push(quote);
}

/***
  function `getRandomQuote` selects a random quote from the quotes array.
    `randInt` calculates a random integer and is then used to select a quote by its index from the quotes array.
    the selected quote is then stored in the `getRandomQuote` function.
***/

function getRandomQuote() {
  let numQuotes = quotes.length;
  let randInt = Math.floor(Math.random() * numQuotes);
  return quotes[randInt];
}

/***
  function `printQuote` takes the randomized quote and prints it to the HTML.
    let `randomQuote` stores the selected quote information.
    let `string` parses together the quote and its affiliated information that will be printed in the HTML.
    prints to the page using .innerHTML
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  let string = ``;
  string += `<p class="quote"> ${randomQuote.quote} </p>`;
  string += `<p class="source"> ${randomQuote.source}`;
  if ("citation" in randomQuote) {
    string += `<span class="citation"> ${randomQuote.citation} </span>`;
  }
  if ("year" in randomQuote) {
    string += `<span class="year"> ${randomQuote.year} </span>`;
  }
  string += `, in <span class='tag'>  ${randomQuote.tag} </span> </p>`;
  document.getElementById("quote-box").innerHTML = string;
}

/***
  function `randBgCol` randomly selects a color by generating three values for a RGB value.
  it then compiles these values into a working RGB value and sets the background color to that RGB.
***/

function randBgCol() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let bgRGB = `rgb(${r},${g},${b})`;
  document.body.style.background = bgRGB;
}

/***
  Loads quote either on click of .btn or after 30 seconds.
  timer resets on .btn press.
***/

let btn = document.getElementById("loadQuote");
btn.addEventListener("click", refreshQuote);

let timer = setInterval(function() {
  refreshQuote();
}, 30000);

function refreshQuote() {
  randBgCol();
  printQuote();

  // clear initial interval if btn manually interacted with
  clearInterval(timer);
  timer = setInterval(function() {
    refreshQuote();
  }, 30000);
}
