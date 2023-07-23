const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const PORT = 3001;

const requestCountries = async () => {
  const res = await axios.get('http://localhost:5000/countries');
  const data = res.data;
  const countries = data.map(country => {
    return {
      id: country.cca3,
      name: country.name.common,
      flag: country.flags.png,
      continent: country.continents[0],
      capital: country.capital ? country.capital[0] : '-',
      region: country.region,
      subregion: country.subregion,
      area: country.area,
      population: country.population,

    };
  });
  // for (let country of countries){
	// 	await Country.create(country);
	// };
  countries.map(async (country) => await Country.create(country));
};

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  requestCountries();
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
