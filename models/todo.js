var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Todo = new Schema({
    title : {
        type:String,
        required: true
    },
    created : {
        type:Date, 
        default:Date.now()
    }
});

var Todos = mongoose.model('Todo',Todo);

module.exports = Todos;