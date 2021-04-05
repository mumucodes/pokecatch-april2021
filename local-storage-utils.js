import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';

// - getPokedex
export function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);

    if (!stringyPokedex) return [];

    const parsedPokedex = JSON.parse(stringyPokedex);

    return parsedPokedex;
}

export function setPokedex(parsedPokedex) {
    const stringyPokedex = JSON.stringify(parsedPokedex);

    localStorage.setItem(POKEDEX, stringyPokedex);
}

// - encounterPokemon
export function encounterPokemon(pokemon) {
    // this should take in a pokemon 
    // get the pokedex
    const pokedex = getPokedex();
    // ask "is this pokemon already in here?"
    const matchingPokedexItem = findById(pokedex, pokemon.pokemon);

    // if so, increment the encountered property
    if (matchingPokedexItem) {
        matchingPokedexItem.encountered++;
    } else {
        // else initialize a new pokedex object
        const newPokedexItem = {
            id: pokemon.pokemon,
            captured: 0,
            encountered: 1
        };

        pokedex.push(newPokedexItem);
    }

    setPokedex(pokedex);

    return pokedex;
}

// - capturePokemon;
export function capturePokemon(pokemon) {
    // this should take in a pokemon 
    // get the pokedex
    const pokedex = getPokedex();
    // ask "is this pokemon already in here?"
    const matchingPokedexItem = findById(pokedex, pokemon.pokemon);

    // if so, increment the encountered property
    matchingPokedexItem.captured++;

    setPokedex(pokedex);

    return pokedex;
}