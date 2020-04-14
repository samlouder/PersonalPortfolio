let pokeContainer = document.getElementById('.pokeContainer')

/*function getPokeData(url) {
    fetch(url).then(function (response) {
        response.json().then(function (pokemon) {
            console.log(pokemon.results)
            populatePokeCards(pokemon.results)
        })
    })
}

getPokeData('https://pokeapi.co/api/v2/pokemon')*/
// https://pokeapi.co/api/v2/pokemon/1/

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    catch(error) {
        console.error(error)
    }
}

getAPIData('https://pokeapi.co/api/v2/pokemon/?&limit=25').then(
    (data) => {
        for (const pokemon of data.results) {
            getAPIData(pokemon.url).then(
                (pokeData) =>{
                    populatePokeCard(pokeData)
                }
            )
        }
    }
)

function populatePokeCard(singlePokemon) {
        let pokeScene = document.createElement('div')
        pokeScene.className = 'scene'
        let pokeCard = document.createElement('div')
        pokeCard.className = 'card'
        pokeCard.addEventListener( 'click', function() {
            pokeCard.classList.toggle('is-flipped')
        })
        let pokeFront = populateCardFront(singlePokemon)
        let pokeBack = populateCardBack(singlePokemon)

        pokeCard.appendChild(pokeFront)
        pokeCard.appendChild(pokeBack)
        pokeScene.appendChild(pokeContent)
        pokeContainer.appendChild(pokeCard)
}

function populateCardFront(pokeMon) {
    let cardFront = document.createElement('div')
    cardFront.className = 'card_face card_face--front'
    cardFront.textContent = `${pokeMon.name} ${pokeMon.id}`
    let frontImage = document.createElement('img')
    frontImage.src = '../images/001.png'
    cardFront.appendChild(frontImage)
    return cardFront
}

function populateCardBack(pokeMon) {
    let cardBack = document.createElement('div')
    cardBack.className = 'card_face card_face--back'
    cardBack.textContent = pokeMon.stats[0].stat.name
    return cardBack
}

{
    /* <div class="scene">
    <div class="card">
    <div class="card_face card_face--front">front</div>
    <div class="card_face card_face--back"><div><p>Hi, i'm here on the back</p></div></div>
</div>
</div>

var card = document.puerrySelector('.card);
card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped);
});
*/
}