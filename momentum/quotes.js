const quotePlace = document.getElementById("quote-text-id");
const authorPlace = document.getElementById("author-id");

const generateQuotes = async () => {
	try {
		const res = await fetch("https://api.quotable.io/random");
		if (res.ok) {
			const data = await res.json();
			return data;
		}
	} catch (err) {
		alert(`Please reload. There's an error occured ${err}`);
	}
};

const showQuotes = () => {
	generateQuotes().then((result) => {
		quotePlace.innerText = result.content;
		authorPlace.innerText = result.author;
	});
};

//window.onload = () => {
showQuotes();
//};


document.getElementById("change-quote-id").addEventListener("click", () => {
    showQuotes();
});
