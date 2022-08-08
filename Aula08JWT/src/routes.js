const { Router } = require('express');

const UserController = require('./app/Controllers/UserController');
const LoginController = require('./app/Controllers/LoginController')
const AuthMidleware = require('./app/midlewares/AuthMidleware')

const routes = new Router();

routes.post("/user", UserController.index);
routes.get("/getUser", AuthMidleware, UserController.show);
routes.post("/userAdd", UserController.store)
routes.post("/loginUser", LoginController.index)

module.exports = routes;