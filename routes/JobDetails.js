/*

Sample response from GET 
[
      {
      "JOB_ID": "JOB_2017123101",
      "JOB_TITLE": "Software Developer / Analyst",
      "JOB_LOCATION": "13224 Telecom Dr, Temple Terrace,",
      "JOB_DURATION": "Full Time",
      "JOB_DESCRIPTION": "Analysis, Design, and Development of Software Applications using various software languages and tools.",
      "EDUCATION": "Masters in Computer Science or any Engineering or Business or any Science or equivalent with 6 months experience in Analysis, Design & Development of software applications: or in alternate a Bachelor degree with 5 years of progressive experience in lieu of Master Degree.",
      "SPECIAL_REQUIREMENT": "No Telecommuting. Travel required to customer locations across the U.S. to perform required tasks. Experience in Software development / programming analysis is acceptable irrespective of the applicant?s job title. Experience in alternate IT positions such as programmer, software engineer, etc. acceptable.",
      "ACTIVE": "Y",
      "HOW_TO_APPLY": "By Mail to HR, 13224 TELECOM DR, TEMPLE TERRACE, FL 33637.",
      "CITY": "FL",
      "COUNTY": "FL",
      "STATE": "FL",
      "ZIPCODE": "33637",
      "COUNTRY": "USA",
      "TEXT1": null,
      "TEXT2": null,
      "NUM1": null,
      "NUM2": null,
      "DATE1": null,
      "DATE2": null,
      "CREATE_DTTM": null,
      "CREATED_BY": null,
      "UPDATE_DTTM": "2017-12-31T16:43:07.000Z",
      "UPDATED_BY": null
   },
      {
      "JOB_ID": "JOB_2017123102",
      "JOB_TITLE": "Software Developer / Analyst",
      "JOB_LOCATION": "13224 Telecom Dr, Temple Terrace,",
      "JOB_DURATION": "Full Time",
      "JOB_DESCRIPTION": "Analysis, Design, and Development of Software Applications using various software languages and tools.",
      "EDUCATION": "Masters in Computer Science or any Engineering or Business or any Science or equivalent with 6 months experience in Analysis, Design & Development of software applications: or in alternate a Bachelor degree with 5 years of progressive experience in lieu of Master Degree.",
      "SPECIAL_REQUIREMENT": "No Telecommuting. Travel required to customer locations across the U.S. to perform required tasks. Experience in Software development / programming analysis is acceptable irrespective of the applicant?s job title. Experience in alternate IT positions such as programmer, software engineer, etc. acceptable.",
      "ACTIVE": "Y",
      "HOW_TO_APPLY": "By Mail to HR, 13224 TELECOM DR, TEMPLE TERRACE, FL 33637.",
      "CITY": "FL",
      "COUNTY": "FL",
      "STATE": "FL",
      "ZIPCODE": "33637",
      "COUNTRY": "USA",
      "TEXT1": null,
      "TEXT2": null,
      "NUM1": null,
      "NUM2": null,
      "DATE1": null,
      "DATE2": null,
      "CREATE_DTTM": null,
      "CREATED_BY": null,
      "UPDATE_DTTM": "2017-12-31T16:46:37.000Z",
      "UPDATED_BY": null
   }
]

Sample Request for POST 

 {  
      "id":"JOB_2017123101",
      "title":"Software Developer / Analyst",
      "location":"13224 Telecom Dr, Temple Terrace,",
      "duration":"Full Time",
      "description":"Analysis, Design, and Development of Software Applications using various software languages and tools.",
      "education":"Masters in Computer Science or any Engineering or Business or any Science or equivalent with 6 months experience in Analysis, Design & Development of software applications: or in alternate a Bachelor degree with 5 years of progressive experience in lieu of Master Degree.",
      "specialrequirement":"No Telecommuting. Travel required to customer locations across the U.S. to perform required tasks. Experience in Software development / programming analysis is acceptable irrespective of the applicant’s job title. Experience in alternate IT positions such as programmer, software engineer, etc. acceptable.",
      "active":"Y",
      "howtoapply":"By Mail to HR, 13224 TELECOM DR, TEMPLE TERRACE, FL 33637.",
      "city":"FL",
      "county":"FL",
      "state":"FL",
      "zipcode":"33637",
      "country":"USA"
}
*/

var express = require('express');
var router = express.Router();
var JobDetails = require('../models/JobDetails');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        JobDetails.getJobDetailByJobId(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        JobDetails.getAllJobDetails(function (err, rows) {
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
    JobDetails.addJobDetail(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
        }
    });
});
router.delete('/:id', function (req, res, next) {
    JobDetails.deleteJobDetail(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }

    });
});
// router.put('/:id', function (req, res, next) {
//     JobDetails.updateJobDetail(req.params.id, req.body, function (err, rows) {
//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(rows);
//         }
//     });
// });
module.exports = router;