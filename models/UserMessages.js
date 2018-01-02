var db = require('../utils/mysqlconnection'); //reference of mysqlconnection.js

var UserMessages = {
    getAllUserMessages: function (callback) {
        return db.query("SELECT * FROM user_messages ORDER BY UPDATE_DTTM DESC", callback);
    },
    getMessagesByEmailAddress: function (email, callback) {
        return db.query("SELECT * FROM user_messages WHERE EMAIL_ADDRESS=?  ORDER BY UPDATE_DTTM DESC", [email], callback);
    },
    getMessagesByMessageId: function (id, callback) {
        return db.query("SELECT * FROM user_messages WHERE MESSAGE_ID=?  ORDER BY UPDATE_DTTM DESC", [id], callback);
    },
    addUserMessage: function (UserMessages, callback) {        
        return db.query(
            "INSERT INTO user_messages (USER_ID,FIRST_NAME,LAST_NAME,EMAIL_ADDRESS,CONTACT_NUM,MESSAGE_DESC,ADDRESS_LINE1,ADDRESS_LINE2,CITY,COUNTY,STATE,ZIPCODE,COUNTRY) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [UserMessages.userid, UserMessages.firstname, UserMessages.lastname, UserMessages.email, UserMessages.contactnum, UserMessages.messagedesc, UserMessages.addressline1,
            UserMessages.addressline2, UserMessages.city, UserMessages.county, UserMessages.state, UserMessages.zipcode, UserMessages.country],
            callback);
    },
    deleteUserMessage: function (id, callback) {
        return db.query("DELETE FROM user_messages WHERE MESSAGE_ID=?", [id], callback);
    } 
};
module.exports = UserMessages;