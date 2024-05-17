'use strict';

var utils = require('../utils/writer.js');
var AccessAndAccessMembershipImport = require('../service/AccessAndAccessMembershipImportService');

module.exports.getAccountsGroup_memberships = async function getAccountsGroup_memberships (req, res, next) {
  
try {
    // Call the async function and wait for its result
    const response = await AccessAndAccessMembershipImport.getAccountsGroup_memberships();

    // Write the JSON response
    utils.writeJson(res, response);
} catch (error) {
    // If an error occurs, write the error response
    utils.writeJson(res, { error: error.message }, 500); // Assuming 500 is the appropriate HTTP status code for internal server error
}
};

module.exports.getAccountsRole_memberships = async function getAccountsRole_memberships (req, res, next) {
  
try {
    // Call the async function and wait for its result
    const response = await AccessAndAccessMembershipImport.getAccountsRole_memberships();

    // Write the JSON response
    utils.writeJson(res, response);
} catch (error) {
    // If an error occurs, write the error response
    utils.writeJson(res, { error: error.message }, 500); // Assuming 500 is the appropriate HTTP status code for internal server error
}
};

module.exports.postEntitlementsGroups = async function postEntitlementsGroups (req, res, next, body, offset, pagesize) {

try {
    // Call the async function and wait for its result
    const response = await AccessAndAccessMembershipImport.postEntitlementsGroups(body, offset, pagesize);

    // Write the JSON response
    utils.writeJson(res, response);
} catch (error) {
    // If an error occurs, write the error response
    utils.writeJson(res, { error: error.message }, 500); // Assuming 500 is the appropriate HTTP status code for internal server error
}
};

module.exports.postEntitlementsRoles = async function postEntitlementsRoles (req, res, next, body, offset, pagesize) {
  
try {
    // Call the async function and wait for its result
    const response = await AccessAndAccessMembershipImport.postEntitlementsRoles(body, offset, pagesize);

    // Write the JSON response
    utils.writeJson(res, response);
} catch (error) {
    // If an error occurs, write the error response
    utils.writeJson(res, { error: error.message }, 500); // Assuming 500 is the appropriate HTTP status code for internal server error
}
};