var TaskController = require('../controllers/task.controller'),
    express = require('express'),
    router = express.Router();

 router
    .get('/',TaskController.getAllTask)    
    .get('/incomplete',TaskController.getIncompleteTask)
    .post('/',TaskController.createTask)
    .delete('/',TaskController.deleteTask);
module.exports = router;