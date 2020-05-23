const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=bc9428fddb73c834e2c86c73955cefbb&query=' + latitude + ',' + longitude

    request({ url, json: true }, (err, { body } = {}) => {
        if (err) {
            callback('Unable to connect to weather service!', undefined)
        }
        else if (body.error) {
            callback('Unable to find location!', undefined)
        }
        else {
            const temperature = body.current.temperature
            const feelslike = body.current.feelslike
            const forecast = body.current.weather_descriptions[0]
            const humidity = body.current.humidity

            callback(undefined, forecast + '. It is currently ' + temperature + ' degress out. It feels like ' + feelslike + ' degrees out. The humidity is ' + humidity + '%')
        }
    })
}

module.exports = forecast