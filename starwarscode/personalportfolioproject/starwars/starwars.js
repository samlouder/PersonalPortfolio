import { films } from "../data/films.js"
import { people } from  "../data/people.js"
import {removeChildren} from "../utils.js"
//let gallery = document.querrySelector('.gallery')
const gallery = document.getElementById("gallery")

console.log(gallery)
// console.log(people)
const maleCharacters = people.filter(person => person.gender === 'male')

const femaleCharacters = people.filter(person => person.gender === 'female')

const otherCharacters = people.filter(
    person =>
    person.gender ==='n/a' ||
    person.gender ==='none' ||
    person.gender ==='hermaphrodite',
)
console.log(otherCharacters, femaleCharacters)

let maleButton = document.getElementById("maleButton")
let femaleButton = document.getElementById('femaleButton')
let otherButton = document.getElementById('otherButton')

maleButton.addEventListener('click', function(event) {
    populateDOM(maleCharacters)
})

femaleButton.addEventListener('click', function(event) {
    populateDOM(femaleCharacters)
})

otherButton.addEventListener('click', function(event) {
    populateDOM(otherCharacters)
})

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end -2
    if(url.charAt(start) === '/'){
        start++
    }
    return url.slice(start, end)
}

// function removeChildren(element) {
//     while (element.firstChild) {
//         element.removeChild(element.firstChild)
//     }
// }
console.log(people[0].name)

function populateDOM(characters) {
    removeChildren(gallery)
    let counter = 0
    characters.forEach(person => {
        let imageNum = getLastNumber(person.url)
        let personAnchor = document.createElement('a')
        let name = document.createElement('p')
        name.innerText = characters[counter].name
        personAnchor.className = "test"
        personAnchor.href = '#'
        let personImg = document.createElement('img')
        personImg.src = `https://starwars-visualguide.com/assets/img/characters/${imageNum}.jpg`
        //personImg.src = `https://starwars-visualguide.com/#/characters/${imageNum}.jpg`

        personImg.addEventListener('error', event => {
            personImg.hidden = true
            //personImg.src = '../images/uvu.jpeg'
        })

        personImg.addEventListener('click',function(event) {
            console.log('Thanks for clicking!')
        })
        
        personAnchor.appendChild(personImg)
        personAnchor.appendChild(name)
        gallery.appendChild(personAnchor)
        counter++
    })
}


//populateDOM(people)