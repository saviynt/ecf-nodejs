'use strict';

var utils = require('../utils/writer.js');
var UserProvisioning = require('../service/UserProvisioningService');

module.exports.patchUpdateUser = async function patchUpdateUser (req, res, next, body, userName) {
  
    try {
        // Call the async function and wait for its result
        const response = await UserProvisioning.patchUpdateUser(body, userName);

        // Write the JSON response
        utils.writeJson(res, response);
    } catch (error) {
        // If an error occurs, write the error response
        utils.writeJson(res, { error: error.message }, 500); // Assuming 500 is the appropriate HTTP status code for internal server error
    }
};