'use strict';


/**
 * This API updates a user
 *
 * body Updateuser  (optional)
 * userName String 
 * returns inline_response_200
 **/
exports.apiV1UpdateUserUserNamePATCH = function(body,userName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "errorCode" : "0",
  "message" : "SUCCESS User Updated Successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

