'use strict';

var utils = require('../utils/writer.js');
var AccountProvisioning = require('../service/AccountProvisioningService');

module.exports.apiV1ChangePasswordPUT = function apiV1ChangePasswordPUT (req, res, next, body) {
  AccountProvisioning.apiV1ChangePasswordPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1CreateAccountPOST = function apiV1CreateAccountPOST (req, res, next, body) {
  AccountProvisioning.apiV1CreateAccountPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1RemoveAccountAccountIDDELETE = function apiV1RemoveAccountAccountIDDELETE (req, res, next, accountID) {
  AccountProvisioning.apiV1RemoveAccountAccountIDDELETE(accountID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1UpdateAccountAccountID1PATCH = function apiV1UpdateAccountAccountID1PATCH (req, res, next, body, accountID1) {
  AccountProvisioning.apiV1UpdateAccountAccountID1PATCH(body, accountID1)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1UpdateAccountAccountID2PATCH = function apiV1UpdateAccountAccountID2PATCH (req, res, next, body, accountID2) {
  AccountProvisioning.apiV1UpdateAccountAccountID2PATCH(body, accountID2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1UpdateAccountAccountID3PATCH = function apiV1UpdateAccountAccountID3PATCH (req, res, next, body, accountID3) {
  AccountProvisioning.apiV1UpdateAccountAccountID3PATCH(body, accountID3)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
