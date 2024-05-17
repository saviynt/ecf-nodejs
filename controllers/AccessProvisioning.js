'use strict';

var utils = require('../utils/writer.js');
var AccessProvisioning = require('../service/AccessProvisioningService');

module.exports.entitlementGroupRemoveAccessPUT = async function entitlementGroupRemoveAccessPUT (req, res, next, body) {
  

    try {
        // Call the async function and wait for its result
        const response = await AccessProvisioning.entitlementGroupRemoveAccessPUT(body)

        // Write the JSON response
        utils.writeJson(res, response);
    } catch (error) {
        // If an error occurs, write the error response
        utils.writeJson(res, { error: error.message }, 500); // Assuming 500 is the appropriate HTTP status code for internal server error
    }
};

module.exports.entitlementRoleAddAccessPUT = async function entitlementRoleAddAccessPUT (req, res, next, body) {
  
    try {
        // Call the async function and wait for its result
        const response = await AccessProvisioning.entitlementRoleAddAccessPUT(body);

        // Write the JSON response
        utils.writeJson(res, response);
    } catch (error) {
        // If an error occurs, write the error response
        utils.writeJson(res, { error: error.message }, 500); // Assuming 500 is the appropriate HTTP status code for internal server error
    }
};

module.exports.entitlementRoleRemoveAccessPUT = async function entitlementRoleRemoveAccessPUT (req, res, next, body) {
  
try {
    // Call the async function and wait for its result
    const response = await AccessProvisioning.entitlementRoleRemoveAccessPUT(body);

    // Write the JSON response
    utils.writeJson(res, response);
} catch (error) {
    // If an error occurs, write the error response
    utils.writeJson(res, { error: error.message }, 500); // Assuming 500 is the appropriate HTTP status code for internal server error
}
};

module.exports.put_entitlementgroups = async function put_entitlementgroups (req, res, next, body) {

    try {
        // Call the async function and wait for its result
        const response = await AccessProvisioning.put_entitlementgroups(body);

        // Write the JSON response
        utils.writeJson(res, response);
    } catch (error) {
        // If an error occurs, write the error response
        utils.writeJson(res, { error: error.message }, 500); // Assuming 500 is the appropriate HTTP status code for internal server error
    }
};
    
    