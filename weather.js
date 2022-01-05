const request = require('request');
const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    // const options = {
    //     method: 'GET',
    //     url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
    //     qs: { lat: '47.8864', lon: '106.9057' },
    //     headers: {
    //         'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
    //         'x-rapidapi-key': '556b402be5msha44b7574e892202p147fc1jsn15ed2436cdf6',
    //         useQueryString: true
    //     }
    // };

// request(options, function(error, response, body) {
//     // if (error) throw new Error(error);
// let weather1 = JSON.parse(body)
//     console.log('country name ' + weather1.data[0].city_name);

//     console.log('temp ' + weather1.data[0].temp);
//     console.log('snow ' + weather1.data[0].snow + '%');
// });

//https://api.mapbox.com/geocoding/v5/mapbox.places/{CITY_NAME}.json?access_token=pk.eyJ1IjoibXVua2h6dWwxIiwiYSI6ImNrdWk2czI5cTFhZDIyd3Q5OXhvcWIwNTIifQ.o65kzaqtL2jRj0NY7NBRcQ

readline.question('улсаа оруулна уу? => ', name => {
    request(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name}.json?access_token=pk.eyJ1IjoibXVua2h6dWwxIiwiYSI6ImNrdWk2czI5cTFhZDIyd3Q5OXhvcWIwNTIifQ.o65kzaqtL2jRj0NY7NBRcQ`, function(error, response, body) {
        let asd = JSON.parse(body)
        length1 = (asd.features).length
        for (let i = 0; i < length1; i++) {
            console.log(i + 1, asd.features[i].place_name)
        }

        readline.question('та алийг нь сонгох вэ? => ', number => {
            let array = asd.features[number - 1].center;
            const options = {
                method: 'GET',
                url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
                qs: { lat: array[1], lon: array[0] },
                headers: {
                    'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
                    'x-rapidapi-key': '556b402be5msha44b7574e892202p147fc1jsn15ed2436cdf6',
                    useQueryString: true
                }
            };
            request(options, function(error, response, body) {
                let weather1 = JSON.parse(body)
                console.log('country name ' + weather1.data[0].city_name);

                console.log('temp ' + weather1.data[0].temp);
            });
            readline.close()
        });

    });

})