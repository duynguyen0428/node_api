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
    findTaskByTitle : function(title,cb){
        TaskModel.find({'title':title}).exec(function(err,task){
            if(err) cb(err);
            else cb(null,task);
        });
    },
    findTaskById : function(id,cb){
        TaskModel.find({'_id':title}).exec(function(err,task){
            if(err) cb(err);
            else cb(null,task);
        });
    },
    removeTask : function(_id,cb){
        TaskModel.findByIdAndRemove(id).exec(function(err,response){
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