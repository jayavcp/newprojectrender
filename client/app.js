const gamesWrapper = document.getElementById("gamesWrapper");

// get the games from my api
async function getGames() {
  const response = await fetch(
    "https://newprojectrender.onrender.com/games"
    // "http://localhost:8080/games"
  );
  const games = await response.json();
  console.log(games);

  // put games onto page
  games.forEach(function (game) {
    //DOM manipulation to put games in html
    const h2 = document.createElement("h2");
    const p = document.createElement("P");
    const img = document.createElement("img");

    h2.textContent = game.name;
    p.textContent = `Came out in ${game.year}`;
    img.src = game.imgUrl;
    img.alt = game.name;

    gamesWrapper.appendChild(h2);
    gamesWrapper.appendChild(p);
    gamesWrapper.appendChild(img);
  });
}

getGames();
