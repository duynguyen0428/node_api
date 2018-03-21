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
    },
    deleteTask : function(req,res,next){
        var query = req.body;
        TaskService.removeTask(query,function(err,response){
            if(err) return res.status(400).json(err.message);
            else return res.status(200).json(response);
        });
    },
    getIncompleteTask : function(req,res,next){
        var condition = {'completed': false};
        TaskService.findTask(condition,function(err,response){
            if(err) return res.status(400).json(err.message);
            else return res.status(200).json(response);
        });
    }
}