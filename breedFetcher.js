const request = require('request');

let commandArg = process.argv.slice(2)[0];

const breedGetter = function(cb, breed) {
  request(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed.slice(0, 4)}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      console.log(error);
    } else if (data.length === 0) {
      console.log('thats not even a cat, u smell like dawg');
    } else {
      cb(data);
    }
  });
};

const writer = function(tingz) {
  tingz = tingz[0]['breeds'][0]['description'];
  console.log(tingz);
};

breedGetter(writer, commandArg);