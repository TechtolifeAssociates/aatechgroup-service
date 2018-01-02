var db = require('../utils/mysqlconnection'); //reference of mysqlconnection.js

var JobDetails = {
    getAllJobDetails: function (callback) {
        return db.query("SELECT * FROM job_details WHERE ACTIVE = 'Y' ORDER BY UPDATE_DTTM DESC", callback);
    },
    getJobDetailByJobId: function (id, callback) {
        return db.query("SELECT * FROM job_details WHERE JOB_ID=?  AND ACTIVE = 'Y' ORDER BY UPDATE_DTTM DESC", [id], callback);
    },
    addJobDetail: function (JobDetails, callback) {        
        return db.query(
            "INSERT INTO job_details (JOB_ID,JOB_TITLE,JOB_LOCATION,JOB_DURATION,JOB_DESCRIPTION,EDUCATION,SPECIAL_REQUIREMENT,ACTIVE,HOW_TO_APPLY,CITY,COUNTY,STATE,ZIPCODE,COUNTRY) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [JobDetails.id, JobDetails.title, JobDetails.location, JobDetails.duration, JobDetails.description, JobDetails.education, JobDetails.specialrequirement,
            JobDetails.active, JobDetails.howtoapply, JobDetails.city, JobDetails.county, JobDetails.state, JobDetails.zipcode, JobDetails.country],
            callback);
    },
    deleteJobDetail: function (id, callback) {
        return db.query("DELETE FROM job_details WHERE JOB_ID=?", [id], callback);
    } 
};
module.exports = JobDetails;