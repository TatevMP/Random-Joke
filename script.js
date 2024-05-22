const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const getJoke = async () => {
    jokeContainer.classList.remove("fade");
    try {
        const response = await fetch(url);
        const data = await response.json();
        jokeContainer.textContent = data.joke;
        jokeContainer.classList.add("fade");
    } catch (error) {
        jokeContainer.textContent = "Oops! Something went wrong.";
    }
};

btn.addEventListener("click", getJoke);
getJoke();




