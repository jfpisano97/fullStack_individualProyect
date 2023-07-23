const { Router } = require("express");
const { getCountries } = require('../controllers/countries/getCountries');
const { getCountriesByID } = require('../controllers/countries/getCountriesByID');
const { getCountriesByName } = require('../controllers/countries/getCountriesByName');

const countriesRouter = Router();


countriesRouter.get('/', getCountries);

countriesRouter.get('/:id', getCountriesByID);

countriesRouter.get('/name?=countryName', getCountriesByName);



module.exports = countriesRouter;