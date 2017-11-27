import {
    jwt, _,
} from "../../main/importer";
 declare let Interaction: any;
 declare let sails: any;
 declare let module: any;

module.exports = {

      registerInteraction: function (req, res) {
          sails.log.debug("registerInteraction");
          let data = req.body;
          sails.log.debug(data);
          if(data && data.Sender && data.Reciver && data.Type){
              Interaction.create({
                  sender:data.Sender,
                  reciver:data.Reciver,
                  type:data.Type,
                  recived: (data.Recived === "yes"),
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
          }
      },
	getInteractions: (req,res) => {
        let data = req.body;
        sails.log.debug(data);
        if(data && data.Name){
            Interaction.find({
                or:[
                    {reciver:data.Name},
                    {sender: data.Name}]
                }).exec((err, found) => {
                if(err){
                    sails.log("WEWOWEWO BŁĄD"+err);
                    return res.json({
                        status:"Error",
                        message:"Integral error",
                    });
                }
                res.json({
                    status:'OK',
                    data:found,
                })
            });
        }
	}

};
