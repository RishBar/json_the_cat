const fetchBreedDescription = require('./breedGetter.js').fetchBreedDescription;

let commandArg = process.argv.slice(2)[0];

fetchBreedDescription(commandArg, (error, body) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(body);
  }
});