const { Router } = require("express");
const { getActivities } = require('../controllers/activities/getActivities');
const { postActivities } = require('../controllers/activities/postActivities');

const activitiesRouter = Router();

activitiesRouter.get('/', getActivities);

activitiesRouter.post('/', postActivities); 

module.exports = activitiesRouter;