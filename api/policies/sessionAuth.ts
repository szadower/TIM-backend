/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
 import {
     jwt, _,
 } from "../../main/importer";
 declare let module: any;
 declare let sails: any;
 declare let User: any;

module.exports = function(req, res, next) {
    let token;
  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.session.authenticated) {

    return next();
  }
  // sails.log.debug(req.headers);
  // if(req.headers && req.headers.authorization){
  //     let parts = req.headers.authorization.split(':');
  //     if(parts.length !== 2 || !parts[0] || !parts[1]) {
  //         return res.json(401, {err: 'No Authorization header was found'});
  //     }
  //     token = parts[1];
  //     User.findOne({username: parts[0]}).exex((err, user) => {
  //         if(err){
  //             res.json({
  //                 status:"Error",
  //                 message:"Integral error",
  //             });
  //             return;
  //         }
  //         if (!user) {
  //             res.json({
  //                 status:"Error",
  //                 message:"No Authorization header was found",
  //             });
  //             return;
  //         }
  //         jwt.verify(parts[1], user.password, (err, token) => {
  //
  //         })
  //
  //
  //     })
  // }
  return next();

};
