'use strict';

var utils = require('../utils/writer.js');
var AccessAndAccessMembershipImport = require('../service/AccessAndAccessMembershipImportService');

module.exports.apiV1AccountsGroup_membershipsGET = function apiV1AccountsGroup_membershipsGET (req, res, next) {
  AccessAndAccessMembershipImport.apiV1AccountsGroup_membershipsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1AccountsRole_membershipsGET = function apiV1AccountsRole_membershipsGET (req, res, next) {
  AccessAndAccessMembershipImport.apiV1AccountsRole_membershipsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EntitlementsGroupsPOST = function apiV1EntitlementsGroupsPOST (req, res, next, body, offset, pagesize) {
  AccessAndAccessMembershipImport.apiV1EntitlementsGroupsPOST(body, offset, pagesize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EntitlementsRolesPOST = function apiV1EntitlementsRolesPOST (req, res, next, body, offset, pagesize) {
  AccessAndAccessMembershipImport.apiV1EntitlementsRolesPOST(body, offset, pagesize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
