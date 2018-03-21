var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
    title : {
        type : String,
        required : [true, "Title can't be blank"]
    },
    created : {
        type : Date,
        default : Date.now()
    },
    duedate : {
        type : Date,
        required : [true,"Due date can't be blank"]
    },
    completed : {
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model('Task',TaskSchema);
