/*** 
 * `quotes` array 
***/

const quotes = [
{
  quote: "Trying to define yourself is like trying to bite your own teeth.",
  source: "Alan Watts",
  citation: "Life Magazine",
  year: "1961",
},
{
  quote: "Nirvana is right where you are, provided that you don’t object to it.",
  source: "Alan Watts",
},
{
  quote: "There is One God. He is the supreme truth....Even now, He is the truth and evermore shall truth prevail.",
  source: "Guru Nanak",
  citation: "Guru Granth Sahib Ji",
},
{
  quote: "Simplicity, patience, compassion. These three are your greatest treasures. Simple in actions and thoughts, you return to the source of being.",
  source: "Lao Tzu",
  citation: "Tao Te Ching",
  year: "6th century BC",
},
{
  quote: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
  source: "Alan Watts",
  citation: "The Wisdom of Insecurity",
  year: "1951",
}
];

/***
 * `getRandomQuote` function
***/

/*
Iterate over the array of quotes with a For loop and use Math.floor and Math.random to associate a random number with each quote object in the array
Then return the new random object, called quoteObject.
*/
const getRandomQuote = () => {
  for(let  i = 0; i < quotes.length; i++){
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let quoteObject = { 
      quote: quotes[randomNumber].quote,
      source: quotes[randomNumber].source,
      citation: quotes[randomNumber].citation,
      year: quotes[randomNumber].year,
    }
    return quoteObject;
  }

}
/***
 * `printQuote` function
***/
/*
Use printQuote to call the getRandomQuote function, and store it in the quotations variable, then populate the html variable, which is a
template literal that contains references to relevant html elements, to contain the quote, source, citation, and year properties of the returned quoteObject from getRandomQuote. 
The html variable contains elements with class names that will be used to display the quote, source, citation, 
and year properties of the quote object on the webpage for the user to see.
*/
const printQuote = () => {  
  let quotations = getRandomQuote();
  //Use a template literal to create the html variable and use template literals to insert properties and conditional statements.
  let html = `<p class="quote">${quotations.quote}</p>
              <p class="source">${quotations.source}
                ${quotations.citation ? `<span class="citation">${quotations.citation}</span>` : ''}
                ${quotations.year ? `<span class="year">${quotations.year}</span>` : ''}
              </p>`;
  //Use getElementById to select the quote-box element and set the innerHTML property to the contents of the html variable.
  document.getElementById('quote-box').innerHTML = html;
};



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);