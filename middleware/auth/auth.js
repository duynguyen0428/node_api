module.exports.isAuthenticated = function(req,res,next){
    var jwt = require('jsonwebtoken'),
        usermodel = require('../../models/user.model');
    var token = req.get('auth');
    console.log(token);

    if(!token) return res.status(403).json({'message':'unauthourized'});
    jwt.verify(token,'supersecrect',function(err,decoded){
        console.log(decoded);
        if(err) return res.status(403).json({'message':'unauthourized'});
        if(decoded === 'undefined') return res.status(403).json({'message':'unauthourized'});
        return next();
    })
}