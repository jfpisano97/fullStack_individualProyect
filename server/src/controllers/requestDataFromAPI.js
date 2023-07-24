const axios = require("axios");
const { Country } = require('../db');

module.exports = async () => {
    try {
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
      countries.map(async (country) => await Country.create(country));
    } catch (error) {
      return {error: error.message};
    };
};