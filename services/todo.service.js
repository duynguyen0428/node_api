var TodoModel = require('../models/todo');

module.exports.GetAll = function(next){
    TodoModel.find({},function(err,todos){
        if(err) next(err);
        else next(null,todos);
    });
};

module.exports.Create = function(title,next){
    var todo = new TodoModel({
        title : title
    });
    todo.save(function(err){
        if(err) next(err);
        else next(null);
    });
};

module.exports.Remove = function (id,next) { 
    TodoModel.findByIdAndRemove({'_id':id}).exec(function(err,todo) {
        if(err) next(err);
        else next(null,todo);
    });
 };