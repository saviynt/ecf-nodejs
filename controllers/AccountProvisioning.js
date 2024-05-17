'use strict';

var utils = require('../utils/writer.js');
var AccountProvisioning = require('../service/AccountProvisioningService');

module.exports.deleteRemoveAccount = async function deleteRemoveAccount (req, res, next, accountID) {
  
    try {
        // Call the async function and wait for its result
        const response = await AccountProvisioning.deleteRemoveAccount(accountID);

        // Write the JSON response
        utils.writeJson(res, response);
    } catch (error) {
        // If an error occurs, write the error response
        utils.writeJson(res, { error: error.message }, 500); // Assuming 500 is the appropriate HTTP status code for internal server error
    }
};

module.exports.patchUpdateAccount = async function patchUpdateAccount (req, res, next, body, accountID) {

    try {
        // Call the async function and wait for its result
        const response = await AccountProvisioning.patchUpdateAccount(body, accountID);

        // Write the JSON response
        utils.writeJson(res, response);
    } catch (error) {
        // If an error occurs, write the error response
        utils.writeJson(res, { error: error.message }, 500); // Assuming 500 is the appropriate HTTP status code for internal server error
    }
};

module.exports.postCreateAccount = async function postCreateAccount (req, res, next, body) {

      try {
        // Call the async function and wait for its result
          const response = await AccountProvisioning.postCreateAccount(body);

        // Write the JSON response
        utils.writeJson(res, response);
    } catch (error) {
        // If an error occurs, write the error response
        utils.writeJson(res, { error: error.message }, 500); // Assuming 500 is the appropriate HTTP status code for internal server error
    }
};


module.exports.put_changePassword = async function put_changePassword (req, res, next, body) {
  
    try {
        // Call the async function and wait for its result
        const response = await AccountProvisioning.put_changePassword(body);

        // Write the JSON response
        utils.writeJson(res, response);
    } catch (error) {
        // If an error occurs, write the error response
        utils.writeJson(res, { error: error.message }, 500); // Assuming 500 is the appropriate HTTP status code for internal server error
    }
};