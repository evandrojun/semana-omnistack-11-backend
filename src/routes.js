const express = require('express');

const OngController = require('./controllers/ong_controller');
const IncidentController = require('./controllers/incident_controller');
const ProfileController = require('./controllers/ongs/profile_controller');
const SessionController = require('./controllers/session_controller');

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('ong-profile', ProfileController.index);

module.exports = routes;
