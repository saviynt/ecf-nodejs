'use strict';


/**
 * This API grants group access to an account
 *
 * body Group_addAccess_body  (optional)
 * returns inline_response_200_7
 **/
exports.apiV1EntitlementGroupAddAccessPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "errorCode" : "0",
  "message" : "SUCCESS Group Access Granted Successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * This API removes group access from an account
 *
 * body Group_removeAccess_body  (optional)
 * returns inline_response_200_9
 **/
exports.apiV1EntitlementGroupRemoveAccessPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "errorCode" : "0",
  "message" : "SUCCESS Group Access Revoked Successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * This API grants role access to an account
 *
 * body Role_addAccess_body  (optional)
 * returns inline_response_200_8
 **/
exports.apiV1EntitlementRoleAddAccessPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "errorCode" : "0",
  "message" : "SUCCESS Role Access Granted Successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * This API removes role access from an account
 *
 * body Role_removeAccess_body  (optional)
 * returns inline_response_200_10
 **/
exports.apiV1EntitlementRoleRemoveAccessPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "errorCode" : "0",
  "message" : "SUCCESS Role Access Removed Successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

