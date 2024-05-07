'use strict';

var utils = require('../utils/writer.js');
var UserImport = require('../service/UserImportService');

module.exports.apiV1UsersPOST = function apiV1UsersPOST (req, res, next, body, offset, pagesize) {
  UserImport.apiV1UsersPOST(body, offset, pagesize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
