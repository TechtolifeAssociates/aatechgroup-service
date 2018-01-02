var db = require('../utils/mysqlconnection'); //reference of mysqlconnection.js

var ContentItems = {
    getAllContentItems: function (callback) {
        return db.query("SELECT * FROM content_items WHERE ACTIVE = 'Y' ORDER BY UPDATE_DTTM DESC", callback);
    },
    getContentItemsByContentId: function (id, callback) {
        return db.query("SELECT * FROM content_items WHERE CONTENT_ID=?  AND ACTIVE = 'Y' ORDER BY UPDATE_DTTM DESC", [id], callback);
    },
    addContentItem: function (ContentItems, callback) {        
        return db.query(
            "INSERT INTO content_items (CONTENT_ID,VERSION_NUM,CONTENT_TEXT,CONTENT_IMAGE_LINK,CONTENT_IMAGE,ACTIVE) VALUES (?,?,?,?,?,?)",
            [ContentItems.id, ContentItems.versionnum, ContentItems.contenttext, ContentItems.contentimagelink, ContentItems.contentimage, ContentItems.active],
            callback);
    },
    deleteContentItemByContentId: function (id, callback) {
        return db.query("DELETE FROM content_items WHERE CONTENT_ID=?", [id], callback);
    },
    deleteContentVersionByContentId: function (id,version, callback) {
        return db.query("DELETE FROM content_items WHERE CONTENT_ID=? AND VERSION_NUM=?", [id,version], callback);
    } 
};
module.exports = ContentItems;