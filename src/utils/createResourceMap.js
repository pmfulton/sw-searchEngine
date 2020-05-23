const fetch = require('node-fetch')


const h = new fetch.Headers()
const req = new fetch.Request('https://swapi.dev/api/people/?page=9', {
    method:"GET",
    headers: h
})

fetch(req)
    .then((res) => {
        if(res.ok) {
            return res.json()
        } else {
            throw new Error("Sorry")
        }
    })
    .then((data) => {
        let planets = data.results
        for (let i in planets) {
            let name = JSON.parse(JSON.stringify(planets[i].name)).toLowerCase()
            let index = Number.parseInt(i) + 1
            console.log(`"${name}": 8${index},`)
        }
    })
    .catch((e) => {
        console.log(e.message)
    })