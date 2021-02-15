
/*
  https://docs.thecatapi.com/ 
*/
const URL = 'https://api.thecatapi.com/v1/images/search?size=full';
const getCatAndQuote = async function() {
  try {

    // CAT 
  
    let divTitle = document.getElementById("comment-cat");
    
    let divcat = document.getElementById("cat");
    console.log(`Connection to "${URL}"`);
    let response = await fetch(URL, {
       headers: {
        'User-agent': 'Mozilla/4.0 Custom User Agent',
        'x-api-key': "3ba18862-b370-41c7-8c42-389dd505b7a0",
        'Content-Type': 'application/json'
       }
    });
    
    let cat = await response.json();
    // console.log(cat);   
    let img = document.createElement("img");
    let title = document.createElement("h2");
    title.innerText = "Comfort yourself with a kitten";   
    divTitle.append(title);
    img.src = cat[0].url;
    divcat.appendChild(img);   

    // QUOTE
    const quoteDiv = document.getElementById("quote");
    const authorDiv = document.getElementById("author");
    
    const QuotesURL = 'https://api.quotable.io/random/';
    console.log(`Connection to ${QuotesURL}`);
    const quoteRes = await fetch(
      QuotesURL,
      {
        headers: {
          'User-agent': 'Mozilla/4.0 Custom User Agent',
          'Content-Type': 'application/json'
        }
      });

    const data = await quoteRes.json();
    quoteDiv.innerHTML = `<h2>${data.content}</h2>`;
    authorDiv.innerHTML = `<h3>—${data.author}</h3>`;
    
  }
  catch(e) { 
    console.log('Vaya!\n'+e);
  }
};

getCatAndQuote();
