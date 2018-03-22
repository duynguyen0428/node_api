var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
    name : {
        type : String,
        required : [true, 'item name is must']
    },
    created : {
        type : Date,
        default : Date.now()
    }
});

module.exports = mongoose.model('Item',ItemSchema);