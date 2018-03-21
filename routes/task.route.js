var TaskController = require('../controllers/task.controller'),
    express = require('express'),
    router = express.Router();

 router
    .post('/',TaskController.createTask)
    .get('/',TaskController.getAllTask);
module.exports = router;