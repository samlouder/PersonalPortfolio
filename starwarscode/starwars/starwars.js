import { films } from "../data/films.js"
import { people } from  "../data/people.js"
import {removeChildren} from "../utils.js"
let gallery = document.querrySelector('.gallery')

const maleCharacters = people.filter(person => person.gender === 'male')

const femaleCharacters = people.filter(person => person.gender === 'female')

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

femaleButton.addEventListener('click', function(event) {
    populationDOM(femaleButton)
})

otherButton.addEventListener('click', function(event) {
    populationDOM(otherButton)
})

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end -2
    if(url.charAt(start) === '/'){
        start++
    }
    return url.slice(start, end)
}

function removeChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

function populationDOM(characters) {
    removeChildren(gallery)
    characters.forEach(person => {
        let imageNum =  getLastNumber(person.url)
        let personAnchor = document.createElement('a')
        personAnchor.href = '#'
        let personImg = document.createElement('img')
        personImg.src = `https://starwars-visualguide.com/assests/img/characters/${imageNum}.jpg`
        
        personImg.addEventListener('error', event => {
            personImg.hidden = true
            //personImg.src = '../images/uvu.jpeg'
        })

        personImg.addEventListener('click',function(event) {
            console.log('Thanks for clicking!')
        })

        personAnchor.appendChild(personImg)
        gallery.appendChild(personAnchor)
        counter++
    })
}


populateDOM(people)