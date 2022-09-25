"use strict";



const current_weather = require('./meteo_api');


function getCurrentLocation (ip) {
    const http = require('http');
    // Definition des options de l'url
    const options = {
        host: "ip-api.com",
        path: `/json/${ip}`,
        method: 'GET'
    };

    const request = http.request(options, response => {



        let content = '';



        response.on('data', chunk => {
            content += chunk;
        });



        response.on('end', () => {

            const json = JSON.parse(content);
            const json_lat = json.lat;
            const json_lon = json.lon;
            const json_city = json.city;

            const userCity = json_city;
            const userLat = json_lat;
            const userLon = json_lon;
            console.log('====================================');
            console.log(userLat,userLon,userCity);
            console.log('====================================');
            current_weather(userLat,userLon,userCity)
        });

    });
    request.end();
};

module.exports = getCurrentLocation;