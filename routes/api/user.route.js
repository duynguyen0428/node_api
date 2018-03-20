var express = require('express');
var router = express.Router();
var userController = require('../../controllers/user.controller');
/* GET home page. */
router
.get('/:email', userController.FindUser)
.post('/',userController.Create)
.delete('/',userController.Remove);

module.exports = router;
