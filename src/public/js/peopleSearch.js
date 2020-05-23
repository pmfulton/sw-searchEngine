const button = document.getElementById('search')
const search = document.querySelector("input")



const searchCharacter = button.addEventListener('click', (e) => {

    e.preventDefault()

    const suppliedVal = search.value.toLowerCase().trim()

    const id = peopleToId[suppliedVal]

    

    const uri = `https://swapi.dev/api/people/${id}/`
    const characterImagePath = `img/people/${suppliedVal}.jpg` 
    
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
                throw new Error("Could not find the character. Try again.")
            }
        })
        .then((data) => {

            const searchedCharacter = new Character(data)

            let statsDiv = document.getElementById('planet-info')
            statsDiv.textContent = ""

            for(let prop in searchedCharacter) {
                
                let newInfo = document.createElement('p')
                newInfo.className = "card-text"

                let propName = prop.replace(/[^a-z]/gi, " ")
                let val = searchedCharacter[prop]
                
                if (val.substring(0, 7) === 'unknown') {val = 'unknown'}


                newInfo.textContent = `${propName}: ${val}`
                statsDiv.appendChild(newInfo)
            }
            //grab the image from the public folder
            let imgElement = document.createElement('img')
            imgElement.src = characterImagePath
            imgElement.style = "height: 500px; width: 100%; display: block; border-radius: 20px;"
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




class Character {
    constructor(jsonData) {
        this.Name = JSON.parse(JSON.stringify(jsonData.name)),
        this.Height = JSON.parse(JSON.stringify(jsonData.height)) + ' centimeters',
        this.Mass = JSON.parse(JSON.stringify(jsonData.mass)) + ' kilograms',
        this.Hair_Color = JSON.parse(JSON.stringify(jsonData.hair_color)),
        this.Skin_Color = JSON.parse(JSON.stringify(jsonData.skin_color)), 
        this.Eye_Color = JSON.parse(JSON.stringify(jsonData.eye_color)),
        this.Birth_Year = JSON.parse(JSON.stringify(jsonData.birth_year)),
        this.Gender = JSON.parse(JSON.stringify(jsonData.gender))
    }
}


const peopleToId = {
    "luke skywalker": 1,    
    "c-3po": 2,
    "r2-d2": 3,
    "darth vader": 4,       
    "leia organa": 5,       
    "owen lars": 6,
    "beru lars": 7,
    "r5-d4": 8,
    "biggs darklighter": 9, 
    "obi-wan kenobi": 10,
    "anakin skywalker": 11,
    "wilhuff tarkin": 12,
    "chewbacca": 13,
    "han solo": 14,
    "greedo": 15,
    "jabba the hutt": 16,
    "wedge antilles": 18,
    "jek porkins": 19,
    "yoda": 20,
    "palpatine": 21,
    "boba fett": 22,
    "ig-88": 23,
    "bossk": 24,
    "lando calrissian": 25,
    "lobot": 26,
    "ackbar": 27,
    "mon mothma": 28,
    "arvel crynyd": 29,
    "wicket systri warrick": 30,
    "nien nunb": 31,
    "qui-gon jinn": 32,
    "nute gunray": 33,
    "finis valorum": 34,
    "padme amidala": 35,
    "jar jar binks": 36,
    "roos tarpals": 37,
    "rugor nass": 38,
    "ric olie": 39,
    "watto": 40,
    "sebulba": 41,
    "quarsh panaka": 42,
    "shmi skywalker": 43,
    "darth maul": 44,
    "bib fortuna": 45,
    "ayla secura": 46,
    "ratts tyerel": 47,
    "dud bolt": 48,
    "gasgano": 49,
    "ben quadinaros": 50,
    "mace windu": 51,
    "ki-adi-mundi": 52,
    "kit fisto": 53,
    "eeth koth": 54,
    "adi gallia": 55,
    "saesee tiin": 56,
    "yarael poof": 57,
    "plo koon": 58,
    "mas amedda": 59,
    "gregar typho": 60,
    "corde": 61,
    "cliegg lars": 62,
    "poggle the lesser": 63,
    "luminara unduli": 64,
    "barriss offee": 65,
    "dorme": 66,
    "dooku": 67,
    "bail organa": 68,
    "jango fett": 69,
    "zam wesell": 70,
    "dexter jettster": 71,
    "lama su": 72,
    "taun we": 73,
    "jocasta nu": 74,
    "r4-p17": 75,
    "wat tambor": 76,
    "san hill": 77,
    "shaak ti": 78,
    "grievous": 79,
    "tarfful": 80,
    "raymus antilles": 81,
    "sly moore": 82,
    "tion medon": 83,

}