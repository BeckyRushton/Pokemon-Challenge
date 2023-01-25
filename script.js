import pokemonArray from "./data/pokemon.js";

const pokemonCard = document.querySelector(".card-container");
const searchBar = document.getElementById("search-bar");

const makeCard = (pokemon) => {
  const cardHTML = `
  <div class="card">
    <div class="card__content">
      <img  class="card__image" src="${pokemon.sprite}" alt="image of ${
    pokemon.name
  }"></img>
      <div class="card__heading">${
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      }
      </div>
      <div class="card__text">${
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      } (#${pokemon.id}) is a ${pokemon.types[0]} and ${
    pokemon.types[1]
  } type pokemon. 
      </div>
    </div>
  </div>`;
  return cardHTML;
};
for (let i = 0; i < pokemonArray.length; i++) {
  pokemonCard.innerHTML += makeCard(pokemonArray[i]);
}

const populatePage = (array) => {
  pokemonCard.innerHTML = array.map((pokemon) => makeCard(pokemon)).join("");
};
populatePage(pokemonArray);

const handleSearch = (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredPokemonArr = pokemonArray.filter((pokemon) => {
    if (pokemon.name.toLowerCase().includes(searchTerm)) {
      return true;
    } else {
      return false;
    }
  });
  populatePage(filteredPokemonArr);
  console.log(filteredPokemonArr);
};

searchBar.addEventListener("input", handleSearch);
