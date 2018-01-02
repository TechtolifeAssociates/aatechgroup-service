/*

Sample response from GET 
[
      {
      "CONTENT_ID": "STAFFINGSOLUTION_DIRECTHIRE",
      "VERSION_NUM": 3,
      "CONTENT_TEXT": "One of the most gratifying experiences in the staffing arena is having HR professionals come back for more. AATechGroup feels that pleasure often. We believe it stems from our system for qualifying people for the exact situation they will be asked to handle. This starts, of course, with working to get to know your organization --- its culture, history, position and future direction. Our candidates have the skills you want, and learn to share your values during our preparation. You know, as we do, that success depends on everyone involved, so we work with you to keep the people-chain strong. Whether it's an individual or entire teams. Our proprietary S3Rapproach works with staffing as well as other AATechGroup services. We'll simplify the process for you, and reduce your risk, time and cost. ",
      "CONTENT_IMAGE_LINK": null,
      "CONTENT_IMAGE": null,
      "ACTIVE": "Y",
      "TEXT1": null,
      "TEXT2": null,
      "NUM1": null,
      "NUM2": null,
      "DATE1": null,
      "DATE2": null,
      "CREATE_DTTM": null,
      "CREATED_BY": null,
      "UPDATE_DTTM": "2018-01-01T10:06:22.000Z",
      "UPDATED_BY": null
   },
      {
      "CONTENT_ID": "STAFFINGSOLUTION_DIRECTHIRE",
      "VERSION_NUM": 2,
      "CONTENT_TEXT": "One of the most gratifying experiences in the staffing arena is having HR professionals come back for more. AATechGroup feels that pleasure often. We believe it stems from our system for qualifying people for the exact situation they will be asked to handle. This starts, of course, with working to get to know your organization --- its culture, history, position and future direction. Our candidates have the skills you want, and learn to share your values during our preparation. You know, as we do, that success depends on everyone involved, so we work with you to keep the people-chain strong. Whether it's an individual or entire teams. Our proprietary S3Rapproach works with staffing as well as other AATechGroup services. We'll simplify the process for you, and reduce your risk, time and cost. ",
      "CONTENT_IMAGE_LINK": null,
      "CONTENT_IMAGE": null,
      "ACTIVE": "Y",
      "TEXT1": null,
      "TEXT2": null,
      "NUM1": null,
      "NUM2": null,
      "DATE1": null,
      "DATE2": null,
      "CREATE_DTTM": null,
      "CREATED_BY": null,
      "UPDATE_DTTM": "2018-01-01T10:04:18.000Z",
      "UPDATED_BY": null
   },
      {
      "CONTENT_ID": "STAFFINGSOLUTION_DIRECTHIRE",
      "VERSION_NUM": 1,
      "CONTENT_TEXT": "One of the most gratifying experiences in the staffing arena is having HR professionals come back for more. AATechGroup feels that pleasure often. We believe it stems from our system for qualifying people for the exact situation they will be asked to handle. This starts, of course, with working to get to know your organization --- its culture, history, position and future direction. Our candidates have the skills you want, and learn to share your values during our preparation. You know, as we do, that success depends on everyone involved, so we work with you to keep the people-chain strong. Whether it's an individual or entire teams. Our proprietary S3Rapproach works with staffing as well as other AATechGroup services. We'll simplify the process for you, and reduce your risk, time and cost. ",
      "CONTENT_IMAGE_LINK": null,
      "CONTENT_IMAGE": null,
      "ACTIVE": "Y",
      "TEXT1": null,
      "TEXT2": null,
      "NUM1": null,
      "NUM2": null,
      "DATE1": null,
      "DATE2": null,
      "CREATE_DTTM": null,
      "CREATED_BY": null,
      "UPDATE_DTTM": "2018-01-01T03:08:57.000Z",
      "UPDATED_BY": null
   }
]

Sample Request for POST /PUT

 {
	"id":"STAFFINGSOLUTION_DIRECTHIRE",
	"versionnum":3,
	"contenttext":"One of the most gratifying experiences in the staffing arena is having HR professionals come back for more. AATechGroup feels that pleasure often. We believe it stems from our system for qualifying people for the exact situation they will be asked to handle. This starts, of course, with working to get to know your organization --- its culture, history, position and future direction. Our candidates have the skills you want, and learn to share your values during our preparation. You know, as we do, that success depends on everyone involved, so we work with you to keep the people-chain strong. Whether it's an individual or entire teams. Our proprietary S3Rapproach works with staffing as well as other AATechGroup services. We'll simplify the process for you, and reduce your risk, time and cost. ",
	"active":"Y"
	
}


*/

var express = require('express');
var router = express.Router();
var ContentItems = require('../models/ContentItems');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        ContentItems.getContentItemsByContentId(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        ContentItems.getAllContentItems(function (err, rows) {
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
    req.body.versionnum = 1;
    ContentItems.addContentItem(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
        }
    });
});
router.delete('/:id', function (req, res, next) {
    ContentItems.deleteContentItemByContentId(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }

    });
});
router.delete('/:id/:version', function (req, res, next) {
    ContentItems.deleteContentVersionByContentId(req.params.id, req.params.version, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }

    });
});
router.put('/:id', function (req, res, next) {
    ContentItems.getContentItemsByContentId(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            if (rows) {
                var contentItem = rows[0];
                if (contentItem) {
                    req.body.versionnum = contentItem.VERSION_NUM + 1;
                    ContentItems.addContentItem(req.body, function (err, count) {
                        if (err) {
                            res.json(err);
                        }
                        else {
                            res.json(req.body);
                        }
                    });
                }
            }
        }
    });
});
module.exports = router;