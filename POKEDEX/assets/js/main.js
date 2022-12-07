function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) =>  `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join('')}
            </ol>

            <img src="${pokemon.sprites.other.dream_world.front_default}" alt=">${pokemon.name}">
        </div>     
        </li>`
}

//o fetch retorna uma promise | processamento assíncrono, será executado porém não sera imediato
//retorna a promessa de uma resposta 

 //documento HTML
const pokemonList = document.getElementById('pokemonList')

//transformando uma lista em HTML 
pokeApi.getPokemons().then((pokemons  = [] )  => {
    const novoHTML = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML += novoHTML
})