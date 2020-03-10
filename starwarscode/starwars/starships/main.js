import { starships } from '../data/starships.js'
import { removeChildren} from '../utils.js'

const nav = document.querySelector('.nav')

const navList = docuemnt.querySelector ('.navList')

const shipView = document.querySelector

function populateNav(starships) {
    starships.forEach(starshio => {
        let shipAnchor = document.createElement('a')
        shipAnchor.href = '#'
        let listItem = docuemnt.createElement('li')
        listItem.textContent = starship.name

        shipAnchor.addEventListener('click', event => {
            let shipName = event.target.textContent
            populateShipView(shipName)
        })

        shipAnchor.appendChild(listItem)
        navList.appendChild(shipAnchor)
        
    })
    nav.appendChild(navList)
}

function populateShipView(data) {
    removeChildren(shipView)
let shipTitle = document.createElement('h1')
shipTitle.textContent.content = data
shipView.appendChild(shipTitle)
}

function removeChildren(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

populateNav(starships)