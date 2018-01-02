/*

post

{  
   "userid":"SYSTEM",
   "firstname":"Moinak",
   "lastname":"Sau",
   "email":"sau.moinak1@gmail.com",
   "contactnum":"+919432109700",
   "messagedesc":"Need job",
   "addressline1":"1231 Davidson",
   "addressline2":"",
   "city":"Davidson",
   "county":"Davidson",
   "state":"NC",
   "zipcode":"5466",
   "country":"USA"
}

*/


var express = require('express');
var router = express.Router();
var UserMessages = require('../models/UserMessages');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        var param = req.params.id;
        if (param.indexOf('@') > 0) {
            UserMessages.getMessagesByEmailAddress(req.params.id, function (err, rows) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(rows);
                }
            });
        } else {
            UserMessages.getMessagesByMessageId(req.params.id, function (err, rows) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(rows);
                }
            });
        }
    }
    else {
        UserMessages.getAllUserMessages(function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
});
router.post('/', function (req, res, next) {
    UserMessages.addUserMessage(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
        }
    });
});
router.delete('/:id', function (req, res, next) {
    UserMessages.deleteUserMessage(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }

    });
});
module.exports = router;