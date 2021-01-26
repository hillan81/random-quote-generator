/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// creates an array of objects to store quote related information

const quotes = [
  {
     quote: 'Once you replace negative thoughts with positive ones, you’ll start having positive results.',
     source: 'Willie Nelson',
     year: 2006,
     citation: 'The Tao of Willie: A Guide to the Happiness in Your Heart.',
     category: '#Positivity'
  },
  {
      quote: 'Yesterday is not ours to recover, but tomorrow is ours to win or lose.',
      source: 'Lyndon B. Johnson',
      year: 1963,
      citation: "President Johnson's Thanksgiving Day Address to the Nation Urging 'New Dedication'",
      category: '#Positivity'
   },
   {
      quote: 'Positive thinking will let you do everything better than negative thinking will.',
      source: 'Zig Ziglar',
      category: '#Positivity'
   },
   {
      quote: 'You can’t make positive choices for the rest of your life without an environment that makes those choices easy, natural, and enjoyable.',
      source: 'Deepak Chopra',
      category: '#Positivity'
   }, 
   {
      quote: 'In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.',
      source: 'Les Brown',
      category: '#Positivity'
   },

];



// generates a random number, assigns it to a variable, then uses it to return a random object from the quotes array

function getRandomQuote(array) {
  var quoteIndex = Math.floor( Math.random() * (quotes.length));
  for (var i = 0; i < array.length; i++) {
  var randomQuote = array[quoteIndex];
}
return randomQuote;
}
var result = getRandomQuote(quotes);
console.log(result);

 // creates the result variable and sets the value to the random object that is returned when the getRandomQuote function is called
 // creates the message variable and uses the result variable along with key values to build a string

function printQuote() {
  var message = "";     // Initializing the message variable with empty string
  var result = getRandomQuote(quotes);
  message = "<p class='quote'>" + result.quote + "</p>";
  message += "<p class='source'>" + result.source + "</p>";
   // tests to see if the citation property is present in the result and if so, adds it to the string
   if ("citation" in result) {
      message += "<span class='citation'> " + result.citation + "</span>";
  }
  // tests to see if the year property is present in the result and if so, adds it to the string
  if ("year" in result) {
      message += "<span class='year'> " + result.year + "</span>";
  }
  message += "<span class='category'> " + result.category + "</span>";

  
  document.getElementById('quote-box').innerHTML = message;
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);