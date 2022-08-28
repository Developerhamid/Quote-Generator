const Quotes = document.getElementById("quotes");
const QuotesAuthor = document.getElementById("quotes-author");
const QuotesBtn = document.getElementById("quotes-btn");

const GenerateQuotes = async () => {
  try {
    const Response = await fetch("https://type.fit/api/quotes");
    const Data = await Response.json();
    Quotes.textContent = Data[Math.floor(Math.random() * Data.length)].text;
    QuotesAuthor.textContent =
      "- " + Data[Math.floor(Math.random() * Data.length)].author;
  } catch (err) {
    alert("some error: Check the console");
    console.log(`Error: ${err}`);
  }
};

QuotesBtn.addEventListener("click", GenerateQuotes);

GenerateQuotes();
