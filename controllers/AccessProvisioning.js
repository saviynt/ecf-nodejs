'use strict';

var utils = require('../utils/writer.js');
var AccessProvisioning = require('../service/AccessProvisioningService');

module.exports.apiV1EntitlementGroupAddAccessPUT = function apiV1EntitlementGroupAddAccessPUT (req, res, next, body) {
  AccessProvisioning.apiV1EntitlementGroupAddAccessPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EntitlementGroupRemoveAccessPUT = function apiV1EntitlementGroupRemoveAccessPUT (req, res, next, body) {
  AccessProvisioning.apiV1EntitlementGroupRemoveAccessPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EntitlementRoleAddAccessPUT = function apiV1EntitlementRoleAddAccessPUT (req, res, next, body) {
  AccessProvisioning.apiV1EntitlementRoleAddAccessPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EntitlementRoleRemoveAccessPUT = function apiV1EntitlementRoleRemoveAccessPUT (req, res, next, body) {
  AccessProvisioning.apiV1EntitlementRoleRemoveAccessPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
