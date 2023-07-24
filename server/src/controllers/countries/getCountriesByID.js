const { Country, Activity } = require('../../db');

// handler
const successHandler = async (req) => {
    const {id} = req.params;
    if (id.length !== 3) throw new Error('Invalid ID');
    const upperCaseID = id.toUpperCase();
    const success = await Country.findByPk(upperCaseID, {
        include: {
            model: Activity, 
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
    });
    if (!success) throw new Error('Country not found');
    return success;
};

// controller
const getCountriesByID = async (req, res) => {
    try {
        const country = await successHandler(req);
        res.status(200).json(country);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = {getCountriesByID};