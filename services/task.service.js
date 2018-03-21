var TaskModel = require('../models/task.model');

module.exports = {
    createTask : function(title, duedate,cb){
        var newtask = new TaskModel({
            title : title,
            duedate : duedate
        });
        newtask.save(function(err){
            if(err)cb(err);
            else cb(null);
        });
    },
    findTask : function(query,cb){
        TaskModel.find(query,function(err,response){
            if(err) cb(err);
            else cb(null,response);  
        });
    },
    removeTask : function(qurey,cb){
        TaskModel.remove(query,function(err,response){
            if(err) cb(err);
            else cb(null,response);
        });
    },
    getTasks : function(cb){
        TaskModel.find({}).exec(function(err,tasks){
            if(err) cb(err);
            else cb(null,tasks);
        });
    }
}