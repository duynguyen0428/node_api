var TaskService = require('../services/task.service');

module.exports = {
    createTask : function(req,res,next){
        var title = req.body.title;
        var duedate = req.body.duedate;

        TaskService.createTask(title,duedate,function(err){
            if(err) return res.status(400).json({'message':"can't create new task"});
            else return res.status(201).json({'message':"task created"});
        });
    },
    getAllTask : function(req,res,next){
        TaskService.getTasks(function(err,tasks){
            if(err) return res.status(400).json({'message':"can't find any task"});
            else return res.status(201).json(tasks);
        })
    }
}