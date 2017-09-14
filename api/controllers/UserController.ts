/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `UserController.login()`
   */
  login: (req, res) => {
    let data = req.body;
    if(data & data.Name){
      User.find({
        username: data.Name
      }).exec((err, user)=>{
        if(err){
          data.res.json({
            status:"Error",
            message:"Integral error",
          });
          return;
        }
        if(!user)
        {
          data.res.json({
            status:"Error",
            message:"Wrong username",
          });
          return;
        }
        if (data.Pass !== user.password)
        {
          data.res.json({
            status:"Error",
            message:"Wrong password",
          });
          return;
        }
        req.session.authenticated = data.User;
      })
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
    let data = req.body;
    if(data && data.Name && data.Pass) User.create({
      username:data.Name,
      password:data.Pass,
      gender:data.Sex,
      description:data.desc,
      profilePicture:data.picture,
      birthday:data.birthday,
    }).exec((err) => {
      if(err){
        sails.log("WEWOWEWO BŁĄD"+err);
        return res.json({
          status:'Integral Error',
        });
      }
      res.json({
        status:'OK',
      })
    });
    else
    res.json({
      status:'Wrong data',
    });
  },

  /**
   * `UserController.edit()`
   */
  edit: (req, res) => {
    let data = req.body;

  },
};
