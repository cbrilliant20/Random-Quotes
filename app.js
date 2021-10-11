// Fetch Quotes
const author = document.getElementById("author")
const text = document.getElementById("text")

const getNewQuote = async () => {
  let url = "https://type.fit/api/quotes"
  const response = await fetch(url)
  const allQuotes = await response.json()

  const indx = Math.floor(Math.random() * allQuotes.length)
  const quote = allQuotes[indx].text
  const auth = allQuotes[indx].author

  if (auth == null) {
    author = "Anonymous"
  }

  text.innerHTML = quote
  author.innerHTML = "~ " + auth
}

getNewQuote()
// Get Random Quote

// OnClick for Button and Render Quotes
