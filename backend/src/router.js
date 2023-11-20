const express = require('express');

const router = express.Router();

const clientsController = require('./controllers/clientsController');
const clientsMiddleware = require('./middlewares/clientsMiddleware');
const serviceController = require('./controllers/serviceController');
const serviceMiddleware = require('./middlewares/serviceMiddleware');
const userController = require('./controllers/userController');
const userMiddleware = require('./middlewares/userMiddleware');

//Router Clients
router.get('/clients', clientsController.getAll);
router.get('/client/:id', clientsController.getOne);
router.post('/client', clientsMiddleware.validateFieldNome, clientsController.createClient);
router.delete('/client/:id', clientsController.deleteClient);
router.put('/client/:id',
  clientsMiddleware.validateFieldNome,
  //clientsMiddleware.validateFieldStatus,
  clientsController.updateClient,
);

///Routes Service
router.get('/services', serviceController.getAllService);
router.get('/service/:id', serviceController.getOneService);
router.post('/service', serviceMiddleware.validateFieldNome, serviceController.createService);
router.delete('/service/:id', serviceController.deleteService);
router.put('/service/:id',
  serviceMiddleware.validateFieldNome,
  //serviceMiddleware.validateFieldStatus,
  serviceController.updateService,
);

///Routes Users
router.get('/users', userController.getAllUser);
router.get('/user/:id', userController.getOneUser);
router.post('/user', userMiddleware.validateFieldNome, userController.createUser);
router.delete('/user/:id', userController.deleteUser);
router.put('/user/:id',
  userMiddleware.validateFieldNome,
  //serviceMiddleware.validateFieldStatus,
  userController.updateUser,
);


module.exports = router;