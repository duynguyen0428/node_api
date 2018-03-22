var ItemService = require('../services/item.service');

module.exports = {
    getAllItems : function(req,res,next){
        ItemService.getAllItems({},function(err,response){
            if(err) return res.status(400).json(err);
            else return res.status(200).json(response);

        });
    },
    addItem : function(req,res,next){
        var query = req.body;
        ItemService.createItem(query,function(err,response){
            if(err) return res.status(400).json(err);
            else return res.status(201).json(response);

        });
    },
    removeItem : function(req,res,next){
        var query = req.body;
        ItemService.deleteItem(query,function(err,response){
            if(err) return res.status(400).json(err);
            else return res.status(200).json(response);

        });
    },
}