var express = require('express');
var router = express.Router();
var todoController = require('../../controllers/todo.controller');
/* GET home page. */
router
.get('/', todoController.GetTodos)
.post('/',todoController.Create)
.delete('/',todoController.Remove);

module.exports = router;
