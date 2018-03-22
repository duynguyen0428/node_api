var ItemModel = require('../models/item.model');
module.exports = {
    // createItem : handler(query,cb,"save"),
    // getAllItems :  handler(query,cb,"findAll"),
    // findItem : handler(query,cb,"find"),
    // deleteItem : handler(query,cb,"remove")
    createItem : function(query,cb){
        ItemModel.create(query,function(err,response){
            if(err) cb(err);
            else{
                if(response) cb(null,response);
                else cb(null);
            }
        });
    },
    getAllItems :  function(query,cb){
        ItemModel.find({},function(err,response){
            if(err) cb(err);
            else{
                if(response) cb(null,response);
                else cb(null);
            }
        })
    },
    findItem : function(query,cb){
        ItemModel.find(query,function(err,response){
            if(err) cb(err);
            else{
                if(response) cb(null,response);
                else cb(null);
            }
        });
    },
    deleteItem : function(query,cb){
        ItemModel.remove(query,function(err,response){
            if(err) cb(err);
            else{
                if(response) cb(null,response);
                else cb(null);
            }
        });
    }
}

function handler(query, action, cb){
    switch(action){
        case "save":
            ItemModel.create(query,function(err,response){
                if(err) cb(err);
                else{
                    if(response) cb(null,response);
                    else cb(null);
                }
            });
            break;
        case "remove":
            ItemModel.remove(query,function(err,response){
                if(err) cb(err);
                else{
                    if(response) cb(null,response);
                    else cb(null);
                }
            });
            break;
        case "find":
            ItemModel.find(query,function(err,response){
                if(err) cb(err);
                else{
                    if(response) cb(null,response);
                    else cb(null);
                }
            });
            break;
        case "findAll":
            ItemModel.find({},function(err,response){
                if(err) cb(err);
                else{
                    if(response) cb(null,response);
                    else cb(null);
                }
            });
            break;
    }
}