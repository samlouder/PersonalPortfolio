import { senators } from '../data/senators.js'

//this is all about filter, map, reduce

const container = document.querrySelector('.container')

const filterSenators = (prop, value) => {
    return senators.filter(senator => senator[prop] 
    === value)
}
function populateContainer() {
    senators.forEach(senator => {
        let middleName = senator.middle_name ? ` $ 
        {senator.middle_name} ` : ` `
        let senPara = document.createElement('p')
        senPara.textContent = 
        `${senator.last_name}` 
        container.appendChild(senPara)
        let senFigure = document.createElement('figure')
        let figImg = docuemnt.createElement('img')
        let figCaption = document.createElement 
        ('figcaption')

        figImg.src = `https://www.govtrack.us/static/legislator-photos${senator.govtrack_id}-200px.jpeg`
        figcaption.textContent = `${senator.first_name}${middleName}${senator.last_name}`
 
        senFigure.appendChild(figImg)
        senFigure.appendChild(figcaption)
        container.appendChild(senFigure)
    })
}

populateContainer()
console.log(filterSenators('party', 'R'))
console.log(filterSenators)('party', 'D')
console.log(filterSenators)('party', 'ID')