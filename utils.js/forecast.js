const request = require("request")
// Darksky API outputs huge weather data by coordinates
const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/e5ee0a6d5bf1fbf6ef820e8613d408e6/${latitude},${longitude}?lang=de&units=si`

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, `It's currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability} % chance of rain.`)
        }
    })

}

module.exports = forecast