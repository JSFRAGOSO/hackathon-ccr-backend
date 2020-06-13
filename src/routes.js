const {Router} = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const ReminderController = require('./controllers/ReminderController');
const RecomendationController = require('./controllers/RecomendationController');
const FindRecomendationsController = require('./controllers/FindRecomendationsController');
const routes = Router();

const upload = multer(uploadConfig);

routes.get('/reminders', ReminderController.index);
routes.post('/reminders', upload.single('thumbnail'), ReminderController.store);

routes.get('/recomendations', RecomendationController.index);
routes.post('/recomendations', RecomendationController.store);

routes.get('/recomendations/search', FindRecomendationsController.show);

module.exports = routes;