const request = require('request');

// const writer = function(tingz) {
//   tingz = tingz[0]['breeds'][0]['description'];
//   console.log(tingz);
// };

const fetchBreedDescription = function(breed, cb) {
  request(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed.slice(0, 4)}`, (error, response, body) => {
    if (error) {
      cb(error, null);
    } else if (body.length === 2) {
      return undefined;
    } else {
      let data = JSON.parse(body);
      data = data[0]['breeds'][0]['description'];
      cb(null, data);
    }
  });
};

module.exports = { fetchBreedDescription };