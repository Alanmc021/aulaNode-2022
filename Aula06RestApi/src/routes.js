const { Router } = require('express');

const UserController = require('./app/Controllers/UserController');

const routes = new Router();

routes.post("/user", UserController.index);
routes.get("/getUser", UserController.show);

module.exports = routes;