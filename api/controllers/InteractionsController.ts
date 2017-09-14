/**
 * InteractionsController
 *
 * @description :: Server-side logic for managing Interactions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  registerInteraction: function (req, res) {
    return res.json({
      todo: 'wink() is not implemented yet!'
    });
  },
	getInteractions: (req,res) => {
		let answer = 'lista internacji użytkownika' + req.body.username;
		return res.json({
			todo: answer
		})
	}

};
