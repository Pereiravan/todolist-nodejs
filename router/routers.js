const routes = require("express").Router();// aqui eu puxo da pasta express apenas o metodo router.

const TaskController = require("../controller/TaskController") //

routes.get("/", TaskController.getAll)

module.exports = routes