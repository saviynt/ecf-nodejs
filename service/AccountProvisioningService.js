'use strict';


/**
 * This API can be used to change password of an account
 *
 * body V1_changePassword_body  (optional)
 * returns inline_response_200_6
 **/
exports.apiV1ChangePasswordPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "errorCode" : "0",
  "message" : "SUCCESS Account Password Updated Successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * This API creates an account
 *
 * body Createaccount  (optional)
 * returns inline_response_200_1
 **/
exports.apiV1CreateAccountPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "errorCode" : "0",
  "message" : "SUCCESS Account Created Successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * This API deletes an account
 *
 * accountID String 
 * returns inline_response_200_5
 **/
exports.apiV1RemoveAccountAccountIDDELETE = function(accountID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "errorCode" : "0",
  "message" : "SUCCESS Account Removed Successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * This API updates an account
 *
 * body Updateaccount  (optional)
 * accountID1 String 
 * returns inline_response_200_2
 **/
exports.apiV1UpdateAccountAccountID1PATCH = function(body,accountID1) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "errorCode" : "0",
  "message" : "SUCCESS Account Updated Successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * This API enables an account
 *
 * body UpdateAccount_accountID2_body  (optional)
 * accountID2 String 
 * returns inline_response_200_3
 **/
exports.apiV1UpdateAccountAccountID2PATCH = function(body,accountID2) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "errorCode" : "0",
  "message" : "SUCCESS Account Enabled Successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * This API disables an account
 *
 * body UpdateAccount_accountID3_body  (optional)
 * accountID3 String 
 * returns inline_response_200_4
 **/
exports.apiV1UpdateAccountAccountID3PATCH = function(body,accountID3) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "errorCode" : "0",
  "message" : "SUCCESS Account Disabled Successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

