(function () {
    async function showJoke() {
      let joke;
      const response = await fetch(
        "https://geek-jokes.sameerkumar.website/api?format=json"
      );
      joke = await response.json();
      document.querySelector(".joke").textContent = joke.joke;
    }
    showJoke();
  })();