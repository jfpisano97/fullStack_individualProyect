const { Activity } = require('../../db');

// handler
const getAllActivitiesHandler = async () => {
    const success = await Activity.findAll();
    if (!success.length) throw new Error('Data Base is empty');
    return success;
};

// controller
const getActivities = async (req, res) => {
    try { 
        const activities = await getAllActivitiesHandler();
        res.status(200).json(activities);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = { getActivities };