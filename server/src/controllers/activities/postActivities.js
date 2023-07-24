const { Activity } = require('../../db');

const createActivityHandler = async (name, difficulty, duration, season, countries) => {

    if (!name || !difficulty || !duration || !season || !countries || !countries.length) throw new Error('Missing data');

    const [act, created] = await Activity.findOrCreate({
        where: { name, difficulty, duration, season },
        defaults: { name, difficulty, duration, season },
    });
    
    if (!act) throw new Error('DB error');
    act.addCountries(countries);
    if (created) return act;
    else throw new Error('Activity is already created');
};

const postActivities = async (req, res) => {
    try {
        const {name, difficulty, duration, season, countries} = req.body;
        const newActivity = await createActivityHandler(name, difficulty, duration, season, countries);
        res.status(200).json(newActivity);
    } catch (error) {
        res.status(400).json({error: error.message});
    };  
};

module.exports = { postActivities };