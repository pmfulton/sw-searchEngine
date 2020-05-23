const button = document.getElementById('search')
const search = document.querySelector("input")



const searchPlanet = button.addEventListener('click', (e) => {

    e.preventDefault()

    const suppliedVal = search.value.toLowerCase().trim()
    const id = planetNameToId[suppliedVal]

    const uri = `https://swapi.dev/api/planets/${id}/`
    const planetImagePath = `img/planets/${suppliedVal}.jpg` 
    
    //define headers and api request
    const h = new Headers()
    const req = new Request(uri, {
        method: "GET",
        headers: h
    })

    //fetch data from the api, display it with the DOM
    fetch(req)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Could not find the planet. Try again.")
            }
        })
        .then((data) => {

            const searchedPlanet = new Planet(data)

            let statsDiv = document.getElementById('planet-info')
            statsDiv.textContent = ""

            for(let prop in searchedPlanet) {
                
                let newInfo = document.createElement('p')
                newInfo.className = "card-text"

                let propName = prop.replace(/[^a-z]/gi, " ")
                let val = searchedPlanet[prop]
                
                if (val.substring(0, 7) === 'unknown') {val = 'unknown'}


                newInfo.textContent = `${propName}: ${val}`
                statsDiv.appendChild(newInfo)
            }
            //grab the image from the public folder
            let imgElement = document.createElement('img')
            imgElement.src = planetImagePath
            imgElement.style = "height: 200px; width: 100%; display: block; border-radius: 20px;"
            statsDiv.appendChild(imgElement)
            return data
        })
        .catch((e) => {
            let targDiv = document.getElementById('planet-info')
            targDiv.textContent = ""
            let newInfo = document.createElement('p')
            newInfo.className = "card-text"
            newInfo.textContent = e.message
            targDiv.appendChild(newInfo)
        })

})








//Classes & objects pertaining to the api call
class Planet {
    constructor(jsonData) {
        this.Name = JSON.parse(JSON.stringify(jsonData.name)),
        this.Diameter = JSON.parse(JSON.stringify(jsonData.diameter)) + ' kilometers',
        this.Gravity = JSON.parse(JSON.stringify(jsonData.gravity)) + " G(s)",
        this.Population = JSON.parse(JSON.stringify(jsonData.population)) + " sentient beings",
        this.Rotation_period = JSON.parse(JSON.stringify(jsonData.rotation_period)) + " hours",
        this.Orbital_period = JSON.parse(JSON.stringify(jsonData.orbital_period)) + " days",
        this.Terrain = JSON.parse(JSON.stringify(jsonData.terrain))
        this.Climate = JSON.parse(JSON.stringify(jsonData.climate))
        this.Surface_water = JSON.parse(JSON.stringify(jsonData.surface_water)) + "%"
    }
}

const planetNameToId = {
    "tatooine": 1,
    "alderaan": 2,
    "yavin iv": 3,
    "hoth": 4,
    "dagobah": 5,
    "bespin": 6,
    "endor": 7,
    "naboo": 8,
    "coruscant": 9,
    "kamino": 10,
    "geonosis": 11,
    "utapau": 12,
    "mustafar": 13,
    "kashyyyk": 14,
    "polis massa": 15,
    "mygeeto": 16,
    "felucia": 17,
    "cato neimoidia": 18,
    "saleucami": 19,
    "stewjon": 20,
    "eriadu": 21,
    "corellia": 22,
    "rodia": 23,
    "nal hutta": 24,
    "dantooine": 25,
    "bestine iv": 26,
    "ord mantell": 27,
    "unknown": 28,
    "trandosha": 29,
    "socorro": 30,
    "mon cala": 31,
    "chandrila": 32,
    "sullust": 33,
    "toydaria": 34,
    "malastare": 35,
    "dathomir": 36,
    "ryloth": 37,
    "aleen minor": 38,
    "vulpter": 39,
    "troiken": 40,
    "tund": 41,
    "haruun kal": 42,
    "cerea": 43,
    "glee anselm": 44,
    "iridonia": 45,
    "tholoth": 46,
    "iktotch": 47,
    "quermia": 48,
    "dorin": 49,
    "champala": 50,   
    "mirial": 51,
    "serenno": 52,
    "concord dawn": 53,
    "zolan": 54,
    "ojom": 55,
    "skako": 56,
    "muunilinst": 57,
    "shili": 58,
    "kalee": 59,
    "umbara": 60,
}



