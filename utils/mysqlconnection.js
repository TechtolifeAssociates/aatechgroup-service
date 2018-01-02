//connection for mysql
var mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit : 10,
    host: 'localhost',
    user: 'aatechgr_job',
    password: '&55zHoN1N=2J',
    database: 'aatechgr_job_portal'
});

module.exports = connection;