var UserModel = require('../models/user.model'),
    config = require('../config/config'),
    mongoose = require('mongoose');

// mongoose.connect(config.db);
module.exports.findUser = function(email,next){
    UserModel.find({'email':email}).exec(function(err,user){
        if(err) next(err);
        else next(null,user);
    });
};
module.exports.createUser = function(email,password,next){
    var user = new UserModel({
        email : email,
        password : password
    });
    user.save(function(err){
        if(err) next(err);
        else next(null);
    });

}
module.exports.removeUser = function(email,next){
    UserModel.findOneAndRemove({'email':email}).exec(function(err,user){
        if(err) next(err);
        else next(null,user);
    });
}
module.exports.updateUser = function(email,password,next){}

module.exports.findAUser = function(email,next){
    UserModel.findOne({'email':email},function(err,user){
        if(err) next(err);
        else next(null,user);
    });
}