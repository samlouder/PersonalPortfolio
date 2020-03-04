import { films } from "../data/films.js"
import { people } from  "../data/people.js"

let greetingDiv = document.querrySelector('.greeting')

const maleCharacters = people.filter(person => person.gender === 'male')
console.log(maleCharacters)

const femaleCharacters = people.filter(person => person.gender === 'female')
console.log(femaleCharacters)

const otherCharacters = people.filter(
    person =>
    person.gender ==='n/a' ||
    person.gender ==='none' ||
    person.gender ==='hermaphrodite',
)
console.log(otherCharacters)

let maleButton = document.querrySelector('#maleButton')
let femaleButton = document.querrySelector('#femaleButton')
let otherButton = document.querrySelector('#otherButton')

maleButton.addEventListener('click', function(event) {
    populationDOM(maleCharacters)
})

let counter = 1

function populationDOM(characters) {
    characters.forEach(person => {
        console.log(`${person.url}`)
        let personAnchor = document.createElement('a')
        personAnchor.href = '#'
        let personImg = document.createElement('img')
        personImg.src = `https://starwars-visualguide.com/assests/img/characters/${counter}.jpg`
        
        personImg.addEventListener('error', event => {
            personImg.hidden = true
            //personImg.src = '../images/uvu.jpeg'
        })

        personImg.addEventListener('click',function(event) {
            console.log('Thanks for clicking!')
        })

        personAnchor.appendChild(personImg)
        greetingDiv.appendChild(personAnchor)
        counter++
    })
}
