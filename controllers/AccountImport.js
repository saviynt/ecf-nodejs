'use strict';

var utils = require('../utils/writer.js');
var AccountImport = require('../service/AccountImportService');

module.exports.apiV1AccountsPOST = function apiV1AccountsPOST (req, res, next, body, offset, pagesize) {
  AccountImport.apiV1AccountsPOST(body, offset, pagesize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
