"use strict";

function getCurrentWeather (latitude,longitude,city) {
    const index = require('../index')
    const https = require('https');
    const codeWeather = {
        0: "Ciel clair",
        1: "Plutôt dégagé",
        2: "Partiellement nuageux",
        3: "Couvert",
        45: "Brouillard",
        48: "Dépot de brouillard givré",
        51: "Brume : intensité légère",
        53: "Brume : intensité modérée",
        55: "Brume : dense",
        56: "Brume verglaçante : intensité légère",
        57: "Brume verglaçante : Dense",
        61: "Pluie : Intensité faible",
        63: "Pluie : Intensité modérée",
        65: "Pluie : Intensité forte",
        66: "Pluie verglaçante : Intensité légere",
        67: "Pluie verglaçante : Intensité forte",
        71: "Chute de neige : Intensité légere",
        73: "Chute de neige : Intensité modérée",
        75: "Chute de neige : Intensité forte",
        77: "Grains de neige",
        80: "Averse de pluie : légere",
        81: "Averse de pluie : modérées",
        82: "Averse de pluie : violents",
        85: "Averse de neige : Légere ",
        86: "Averse de pluie : Fortes",
    }

    // const latitude = 49.9007;
    // const longitude = 2.2968;

    const options = {
        host: "api.open-meteo.com",
        path: `/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,windspeed_10m&current_weather=true`,
        method: 'GET'
    };


    const request = https.request(options, response => {

        let content = '';


        response.on('data', chunk => {
            content += chunk;
        });


        response.on('end', () => {


            const json = JSON.parse(content);
            const weatherCode = json.current_weather.weathercode;
            const temperature = json.current_weather.temperature;

            const currentWeather = {
                "city": city,
                "sky": codeWeather[weatherCode],
                "degree": temperature,
            }
            console.log('====================================');
            console.log(currentWeather);
            console.log('====================================');

        });
    });

    request.end();
}

module.exports = getCurrentWeather;