const { Router } = require("express");
const { getCountries } = require('../controllers/countries/getCountries');
const { getCountriesByID } = require('../controllers/countries/getCountriesByID');

const countriesRouter = Router();

countriesRouter.get('/', getCountries);

countriesRouter.get('/:id', getCountriesByID);

module.exports = countriesRouter;