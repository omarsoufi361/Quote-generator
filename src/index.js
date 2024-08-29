const button = document.getElementById("button");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const handleClick = () => {
  fetch("https://quotes-api-self.vercel.app/quote")
    .then((res) => res.json())
    .then((data) => {
      quote.innerText = `"${data.quote}"`;
      author.innerText = `Author: ${data.author}`;
    })
    .catch((error) => {
      console.log(error);
      quote.innerText = "Error fetching quote!";
    });
};

button.addEventListener("click", handleClick);
