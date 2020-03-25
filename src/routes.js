const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const connection = require('./database/index');

const routes = express.Router();


routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.cretate);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.cretate);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;