const routes = require('express').Router();

const contactsController = require('../controllers/contacts');

routes.get('/', contactsController.getAllData);

routes.post('/', contactsController.addContact);

routes.get('/:id', contactsController.getById);

routes.put('/:id', contactsController.updateContact);

routes.delete('/:id', contactsController.deleteContact);

module.exports = routes;
