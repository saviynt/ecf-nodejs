'use strict';

var utils = require('../utils/writer.js');
var UserProvisioning = require('../service/UserProvisioningService');

module.exports.apiV1UpdateUserUserNamePATCH = function apiV1UpdateUserUserNamePATCH (req, res, next, body, userName) {
  UserProvisioning.apiV1UpdateUserUserNamePATCH(body, userName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
