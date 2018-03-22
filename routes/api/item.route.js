var express = require('express'),
    router = express.Router(),
    ItemController = require('../../controllers/item.controller');

router
.get('/',ItemController.getAllItems)
.post('/',ItemController.addItem);
module.exports = router;