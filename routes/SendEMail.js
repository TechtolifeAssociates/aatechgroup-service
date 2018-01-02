/*

{
	"from":"sau.moinak1@gmail.com",
	"subject":"test mail 2",
	"text":"test mail"	
}

*/

var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
    service: "aatechgroup",
    host: "a2ls11.a2hosting.com",
    auth: {
        user: "aatechgr",
        pass: "Ch16vuy20O"
    }
});

router.post('/', function (req, res, next) {
    var body = JSON.parse(JSON.stringify(req.body));
    var mailOptions = {
        to: "sales@aatechgroup.com",
        from: body.from,
        subject: body.subject,
        text: body.text
    };
    console.log(mailOptions);

    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
            var msg = {
                "message": "email sent failed"
            };
            res.json(msg);
        } else {
            console.log("Message sent: " + response);
            var msg = {
                "message": "email sent successfully"
            };
            res.json(response);
        }
    });
});

module.exports = router;