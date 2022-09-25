"use strict";

const user_location = require('./user_Location_Api');

function getUserIp() {
    const https = require('https');

    

    const options = {
        host: "api.my-ip.io",
        path: `/ip.json`,
        method: 'GET'
    };

    // On execute la requête (http.request)
    const request = https.request(options, response => {



        let content = '';


        response.on('data', chunk => {
            content += chunk;
        });


        response.on('end', () => {

            const json = JSON.parse(content);
            const json_ip = json.ip;
            const userIp = json_ip;
            user_location(userIp);
            console.log('====================================');
            console.log(userIp);
            console.log('====================================');
        });

    });

    request.end();
}
getUserIp();
module.exports = getUserIp;
