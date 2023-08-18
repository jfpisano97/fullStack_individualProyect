const { Country, Activity } = require('../../db');
const { Op } = require('sequelize');

// handler
const getCountryByNameHandler = async (name) => {
    const newName = name.charAt(0).toUpperCase() + name.slice(1);
    const success = await Country.findAll({
        where: {
            name: {[Op.iLike]: `%${newName}%`}
        }
    })
    if (!success.length) throw new Error('Country not found');
    return success;
};

// handler
// const getAllCountriesHandler = async () => {
//     const success = await Country.findAll();
//     if (!success.length) throw new Error('Data Base is empty');
//     return success;
// };

const getAllCountriesHandler = async () => {
        const success = await Country.findAll({
            include: {
                model: Activity, 
                attributes: ["name"],
                through: {
                    attributes: [],
                },
            },
        });
        if (!success.length) throw new Error('Data Base is empty');
        return success;
};

// controller
const getCountries = async (req, res) => {
    try {
        const { name } = req.query; 
        const countries = name ? await getCountryByNameHandler(name) : await getAllCountriesHandler();
        res.status(200).json(countries);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = { getCountries };