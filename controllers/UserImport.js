'use strict';

var utils = require('../utils/writer.js');
var UserImport = require('../service/UserImportService');

module.exports.postUsers = async function postUsers (req, res, next, body, offset, pagesize) {
  
try {
    // Call the async function and wait for its result
    const response = await UserImport.postUsers(body, offset, pagesize);

    // Write the JSON response
    utils.writeJson(res, response);
} catch (error) {
    // If an error occurs, write the error response
    utils.writeJson(res, { error: error.message }, 500); // Assuming 500 is the appropriate HTTP status code for internal server error
}
};
