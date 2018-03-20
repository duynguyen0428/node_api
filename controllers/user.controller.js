var UserService = require('../services/user.service');

 module.exports.Create = function (req,res,next) {
    var email = req.body.email;
    var password = req.body.password;

    UserService.createUser(email,password,function(err){
        if(err) return res.status(400).json({'message' : 'Fail to create user'});
        return res.status(201).json({'message' : 'success'});
    })
 };

 module.exports.Remove = function(req,res,next) {
    var email = req.body.email;
    UserService.removeUser(email,function(err,user){
        if(err) return res.status(400).json({'message' : 'Fail to find user'});
        return res.status(200).json(user);
    });
 }

 module.exports.FindUser = function(req,res,next) {
    var email = req.params.email;
    UserService.findUser(email,function(err,user){
        if(err) return res.status(400).json({'message' : 'Fail to find user'});
        return res.status(200).json(user);
    });
}