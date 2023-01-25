import pokemonArray from "./data/pokemon.js";

const pokemonCard = document.querySelector(".card-container");
const searchBar = document.getElementById("search-bar");

const makeCard = (pokemonArr) => {
  const cardHTML = `
  <div class="card">
    <div class="card__content">
      <img  class="card__image" src="${pokemonArr.sprite}" alt="image of ${
    pokemonArr.name
  }"></img>
      <div class="card__heading">${
        pokemonArr.name.charAt(0).toUpperCase() + pokemonArr.name.slice(1)
      }
      </div>
      <div class="card__text">${
        pokemonArr.name.charAt(0).toUpperCase() + pokemonArr.name.slice(1)
      } (#${pokemonArr.id}) is a ${pokemonArr.types[0]} and ${
    pokemonArr.types[1]
  } type pokemon. 
      </div>
    </div>
  </div>`;
  return cardHTML;
};
for (let i = 0; i < pokemonArray.length; i++) {
  pokemonCard.innerHTML += makeCard(pokemonArray[i]);
}

const handleSearch = (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredPokemonArr = pokemonArray.filter((pokemon) => {
    if (pokemon.name.toLowerCase().includes(searchTerm)) {
      return true;
    } else {
      return false;
    }
    populatePage(filteredPokemonArr);
  });
};
const populatePage = (pokemonArr) => {
  pokemonCard.innerHTML = pokemonArr
    .map((pokemon) => makeCard(pokemon))
    .join("");
};
populatePage(pokemonCard);

searchBar.addEventListener("input", handleSearch);
