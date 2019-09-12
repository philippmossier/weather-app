const request = require("request")
const url = "https://api.darksky.net/forecast/e5ee0a6d5bf1fbf6ef820e8613d408e6/48.272928,16.393602?lang=de&units=si"

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to weather service!")
    } else if (response.body.error) {
        console.log("Unable to find location!")
    } else {
        console.log(`It's currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability} % chance of rain.`)
    }
})

// Geocoding
// Address -> Lat / Long -> API

const token = "pk.eyJ1IjoidHljaHVzODgwIiwiYSI6ImNrMGdqaWxzajA3aXYzZnBiNHcyM3hvMGoifQ.46G2R6aYyU9dGf0_qe5qXA"

const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Vienna.json?access_token=pk.eyJ1IjoidHljaHVzODgwIiwiYSI6ImNrMGdqaWxzajA3aXYzZnBiNHcyM3hvMGoifQ.46G2R6aYyU9dGf0_qe5qXA&limit=1"

request({ url: geocodeUrl, json: true }, (error, response) => { // json: true --> parses data to jsonFormat

    if (error) {
        console.log("Unable to connect to geoLocation service!")
    } else if (response.body.features.length === 0) {
        console.log("Unable to find location!")
    } else {
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log(`longitude: ${longitude} latitude: ${latitude}`)
    }
})






// console.log('Starting')

// setTimeout(() => {
//     console.log('2 Second Timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 sec timer')
// }, 0)


// console.log('Stopping')