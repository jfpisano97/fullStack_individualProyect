const { Router } = require("express");
const { getActivities } = require('../controllers/activities/getActivities');
const { postActivities } = require('../controllers/activities/postActivities');

const activitiesRouter = Router();

activitiesRouter.post('/', postActivities); 

activitiesRouter.get('/', getActivities);



module.exports = activitiesRouter;