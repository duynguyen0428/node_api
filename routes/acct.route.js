var experess = require('express'),
    router = experess.Router(),
    UserService = require('../services/user.service'),
    jwt = require('jsonwebtoken');

router
.post('/signin',function(req,res,next){ 
    var email = req.body.email;
    var password = req.body.password;
    UserService.findAUser(email,function(err,user){
        if(err) throw err;
        if(!user)
        {
            return res.status(403).json({'message':"can't find user"});
        }
        else{
            user.comparePassword(password,function(err,isMatch){
                if(err) throw err;
                if(!isMatch){
                    return res.status(403).json({'message':'unauthourized user'});
                }else{
                    var payload = {
                        email : user.email
                    }

                    var token = jwt.sign(payload, 'supersecrect',{
                        expiresIn : 86400 
                    })

                    return res.status(200).header({
                        auth : token
                    }).json({
                        "message":"success"
                    });
                }
            });
        }
    });
})
.post('/signout',function(req,res,next){
    var auth = req.get('auth');
    if(!auth) delete req.header('auth');
    res.status(200).json();
});

module.exports = router;