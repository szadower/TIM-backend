import {
    jwt, _,
} from "../../main/importer";
 declare let User: any;
 declare let sails: any;
 declare let module: any;

module.exports =  {

  /**
   * `UserController.login()`
   */
    login: function (req, res) {
        sails.log.debug("Login");
        let data = req.body;
        if(data) {
            User.findOne({
                username: data.Name
            }).exec((err, user)=>{
                if(err){
                    res.json({
                        status:"Error",
                        message:"Integral error",
                    });
                    return;
                }
                if(!user){
                    res.json({
                        status:"Error",
                        message:"Wrong username",
                    });
                    return;
                }
                if (data.Pass !== user.password) {
                    res.json({
                        status:"Error",
                        message:"Wrong password",
                    });
                    return;
                }
                req.session.authenticated = data.User;
                return res.json({
                    stauts:"OK"
                });
            })
        } else {

            res.json({
                status:"Error",
                message:"Bad request",
            });
        }
    },


  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {
    let data = req.body;
    req.session.user = '';
  },


  /**
   * `UserController.singup()`
   */
    singup: function (req, res) {
        sails.log.debug("Sing Up");
        let data = req.body;
        sails.log.debug(data);
        if(data && data.Name && data.Pass && data.Mail){
            User.findOne({
                or:[
                    {username:data.Name},
                    {email: data.Mail}]
                }).exec((err, found) => {
                    if(err){
                        sails.log("WEWOWEWO BŁĄD"+err);
                        return res.json({
                            status:"Error",
                            message:"Integral error",
                        });
                    }
                    if(found) {
                        return res.json({
                            status:'Error',
                            message:"User already exists",
                        });
                    }
                    User.create({
                        username:data.Name,
                        password:data.Pass,
                        gender:data.Sex,
                        email: data.Mail,
                        description:data.desc,
                        profilePicture:data.picture,
                        birthday:data.birthday,
                    }).exec((err) => {
                        if(err){
                            sails.log("WEWOWEWO BŁĄD"+err);
                            return res.json({
                                status:"Error",
                                message:"Integral error",
                            });
                        }
                        res.json({
                            status:'OK',
                        })
                    });
                });
        } else {
            res.json({
                status:'Wrong data',
            });
        }
    },

  /**
   * `UserController.edit()`
   */
  edit: (req, res) => {
    let data = req.body;
    if(data && data.Name){
        const update: any = {};
        if(data.Pass){update.password = data.Pass}
        if(data.Mail){update.email = data.Mail}
        if(data.Sex){update.gender = data.Sex}
        if(data.Desc){update.description = data.Desc}
        if(data.Picture){update.profilePicture = data.Picture}
        if(data.Birthday ){update.birthday = data.Birthday}
        User.update({username: data.Name},update).exec((err, user)=>{
            if(err){
                res.json({
                    status:"Error",
                    message:"Integral error",
                });
                return;
            }
            if(!user){
                res.json({
                    status:"Error",
                    message:"Wrong username",
                });
                return;
            }
            return res.json({
                stauts:"OK"
            });
        });
    } else {
        res.json({
            status:"Error",
            message:"Bad request",
        });
    }
  },
};
