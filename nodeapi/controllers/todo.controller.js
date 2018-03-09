var TodoService = require('../services/todo.service');

module.exports.GetTodos = function (req,res,next) { 
    TodoService.GetAll(function (err,todos) { 
        if(err) return res.status(400);
        else return res.status(200).json({todos});
     });
 };

 module.exports.Create = function (req,res,next) {
     var title = req.body.title;
     TodoService.Create(title,function (err) {
         if(err) return res.status(400).json({'err':'err'});
         else return res.status(201).json({'message':'created'});
       });
 };

 module.exports.Remove = function(req,res,next) {
     TodoService.Remove(req.body._id,function (err,todo) {
        if(err) return res.status(500).json({'err':err});
        else return res.status(200).json({'message':'removed'});
       });
 }