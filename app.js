const geocode = require('./utils.js/geocode')
const forecast = require('./utils.js/forecast')

geocode('vienna', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(-84.700297, 175.697728, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})



