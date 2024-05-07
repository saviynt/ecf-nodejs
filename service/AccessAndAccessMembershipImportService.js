'use strict';


/**
 * This API returns the list of account entitlement association for entitlement type group
 *
 * returns groupsmembership
 **/
exports.apiV1AccountsGroup_membershipsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 9,
  "group_memberships" : [ {
    "accountID" : 15553759289491,
    "entitlementID" : 15553798176145
  }, {
    "accountID" : 15553759289492,
    "entitlementID" : 15553798176145
  }, {
    "accountID" : 15553759289493,
    "entitlementID" : 15553798176145
  }, {
    "accountID" : 15553759289491,
    "entitlementID" : 15553769734673
  }, {
    "accountID" : 15553759289492,
    "entitlementID" : 15553769734673
  }, {
    "accountID" : 15553759289493,
    "entitlementID" : 15553769734673
  }, {
    "accountID" : 15553759289491,
    "entitlementID" : 15553720929041
  }, {
    "accountID" : 15553759289492,
    "entitlementID" : 15553720929041
  }, {
    "accountID" : 15553759289493,
    "entitlementID" : 15553720929041
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * This API returns the list of account entitlement association for entitlement type role
 *
 * returns rolesmembership
 **/
exports.apiV1AccountsRole_membershipsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 9,
  "role_memberships" : [ {
    "accountID" : 15553759289491,
    "entitlementID" : 15553692240529
  }, {
    "accountID" : 15553759289492,
    "entitlementID" : 15553692240529
  }, {
    "accountID" : 15553759289493,
    "entitlementID" : 15553692240529
  }, {
    "accountID" : 15553759289491,
    "entitlementID" : 15553670302865
  }, {
    "accountID" : 15553759289492,
    "entitlementID" : 1555367030286
  }, {
    "accountID" : 15553759289493,
    "entitlementID" : 15553670302865
  }, {
    "accountID" : 15553759289491,
    "entitlementID" : 15553692240529
  }, {
    "accountID" : 15553759289492,
    "entitlementID" : 15553692240529
  }, {
    "accountID" : 15553759289493,
    "entitlementID" : 15553692240529
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * This API returns the list of group type entitlements
 *
 * body Entitlements_groups_body  (optional)
 * offset Integer  (optional)
 * pagesize Integer  (optional)
 * returns groups
 **/
exports.apiV1EntitlementsGroupsPOST = function(body,offset,pagesize) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 3,
  "groups" : [ {
    "entitlementID" : 15553798176145,
    "entitlement_value" : "Admin Users",
    "description" : "NULL",
    "displayname" : "Admin Users",
    "entitlement_glossary" : "NULL",
    "status" : "1",
    "entclass" : "Group",
    "customproperty1" : "NULL",
    "customproperty2" : "2023-05-24t06:34:23.000z",
    "customproperty3" : "2023-05-24t06:34:23.000z",
    "customproperty4" : "NULL",
    "customproperty5" : "NULL",
    "customproperty6" : "NULL",
    "customproperty7" : "NULL",
    "customproperty8" : "NULL",
    "customproperty9" : "NULL",
    "customproperty10" : "NULL",
    "customproperty11" : "NULL",
    "customproperty12" : "NULL",
    "customproperty13" : "NULL",
    "customproperty14" : "NULL",
    "customproperty15" : "NULL",
    "customproperty16" : "NULL",
    "customproperty17" : "NULL",
    "customproperty18" : "NULL",
    "customproperty19" : "NULL",
    "customproperty20" : "NULL",
    "customproperty21" : "NULL",
    "customproperty22" : "NULL",
    "customproperty23" : "NULL",
    "customproperty24" : "NULL",
    "customproperty25" : "NULL",
    "customproperty26" : "NULL",
    "customproperty27" : "NULL",
    "customproperty28" : "NULL",
    "customproperty29" : "NULL",
    "customproperty30" : "NULL",
    "customproperty31" : "NULL",
    "customproperty32" : "NULL",
    "customproperty33" : "NULL",
    "customproperty34" : "NULL",
    "customproperty35" : "NULL",
    "customproperty36" : "NULL",
    "customproperty37" : "NULL",
    "customproperty38" : "NULL",
    "customproperty39" : "NULL",
    "customproperty40" : "NULL",
    "owners" : [ "15553759289491" ],
    "childEntitlements" : {
      "roles" : [ {
        "entitlementID" : 15553769734673
      }, {
        "entitlementID" : 15553720929041
      } ]
    }
  }, {
    "entitlementID" : 15553769734673,
    "entitlement_value" : "End Users",
    "description" : "NULL",
    "displayname" : "End Users",
    "entitlement_glossary" : "End Users",
    "status" : "0",
    "entclass" : "Group",
    "customproperty1" : "NULL",
    "customproperty2" : "2023-05-24t06:34:23.000z",
    "customproperty3" : "2023-05-24t06:34:23.000z",
    "customproperty4" : "NULL",
    "customproperty5" : "NULL",
    "customproperty6" : "NULL",
    "customproperty7" : "NULL",
    "customproperty8" : "NULL",
    "customproperty9" : "NULL",
    "customproperty10" : "NULL",
    "customproperty11" : "NULL",
    "customproperty12" : "NULL",
    "customproperty13" : "NULL",
    "customproperty14" : "NULL",
    "customproperty15" : "NULL",
    "customproperty16" : "NULL",
    "customproperty17" : "NULL",
    "customproperty18" : "NULL",
    "customproperty19" : "NULL",
    "customproperty20" : "NULL",
    "customproperty21" : "NULL",
    "customproperty22" : "NULL",
    "customproperty23" : "NULL",
    "customproperty24" : "NULL",
    "customproperty25" : "NULL",
    "customproperty26" : "NULL",
    "customproperty27" : "NULL",
    "customproperty28" : "NULL",
    "customproperty29" : "NULL",
    "customproperty30" : "NULL",
    "customproperty31" : "NULL",
    "customproperty32" : "NULL",
    "customproperty33" : "NULL",
    "customproperty34" : "NULL",
    "customproperty35" : "NULL",
    "customproperty36" : "NULL",
    "customproperty37" : "NULL",
    "customproperty38" : "NULL",
    "customproperty39" : "NULL",
    "customproperty40" : "NULL",
    "owners" : [ "15553759289493" ]
  }, {
    "entitlementID" : 15553720929041,
    "entitlement_value" : "Support",
    "description" : "Group for support activity",
    "displayname" : "Support Group",
    "entitlement_glossary" : "Group for support activity",
    "status" : "0",
    "entclass" : "Group",
    "customproperty1" : "NULL",
    "customproperty2" : "2023-05-24t06:34:23.000z",
    "customproperty3" : "2023-05-24t06:34:23.000z",
    "customproperty4" : "NULL",
    "customproperty5" : "NULL",
    "customproperty6" : "NULL",
    "customproperty7" : "NULL",
    "customproperty8" : "NULL",
    "customproperty9" : "NULL",
    "customproperty10" : "NULL",
    "customproperty11" : "NULL",
    "customproperty12" : "NULL",
    "customproperty13" : "NULL",
    "customproperty14" : "NULL",
    "customproperty15" : "NULL",
    "customproperty16" : "NULL",
    "customproperty17" : "NULL",
    "customproperty18" : "NULL",
    "customproperty19" : "NULL",
    "customproperty20" : "NULL",
    "customproperty21" : "NULL",
    "customproperty22" : "NULL",
    "customproperty23" : "NULL",
    "customproperty24" : "NULL",
    "customproperty25" : "NULL",
    "customproperty26" : "NULL",
    "customproperty27" : "NULL",
    "customproperty28" : "NULL",
    "customproperty29" : "NULL",
    "customproperty30" : "NULL",
    "customproperty31" : "NULL",
    "customproperty32" : "NULL",
    "customproperty33" : "NULL",
    "customproperty34" : "NULL",
    "customproperty35" : "NULL",
    "customproperty36" : "NULL",
    "customproperty37" : "NULL",
    "customproperty38" : "NULL",
    "customproperty39" : "NULL",
    "customproperty40" : "NULL",
    "owners" : [ "15553759289493" ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * This API returns the list of role type entitlements
 *
 * body Entitlements_roles_body  (optional)
 * offset Integer  (optional)
 * pagesize Integer  (optional)
 * returns roles
 **/
exports.apiV1EntitlementsRolesPOST = function(body,offset,pagesize) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "roles" : [ {
    "entitlementID" : 15553692240529,
    "entitlement_value" : "Light agent",
    "description" : "Can view and add private comments to tickets",
    "displayname" : "Light agent",
    "entitlement_glossary" : "Light agent",
    "status" : "0",
    "entclass" : "Role",
    "customproperty1" : "NULL",
    "customproperty2" : "2023-05-24t06:34:23.000z",
    "customproperty3" : "2023-05-24t06:34:23.000z",
    "customproperty4" : "NULL",
    "customproperty5" : "NULL",
    "customproperty6" : "NULL",
    "customproperty7" : "NULL",
    "customproperty8" : "NULL",
    "customproperty9" : "NULL",
    "customproperty10" : "NULL",
    "customproperty11" : "NULL",
    "customproperty12" : "NULL",
    "customproperty13" : "NULL",
    "customproperty14" : "NULL",
    "customproperty15" : "NULL",
    "customproperty16" : "NULL",
    "customproperty17" : "NULL",
    "customproperty18" : "NULL",
    "customproperty19" : "NULL",
    "customproperty20" : "NULL",
    "customproperty21" : "NULL",
    "customproperty22" : "NULL",
    "customproperty23" : "NULL",
    "customproperty24" : "NULL",
    "customproperty25" : "NULL",
    "customproperty26" : "NULL",
    "customproperty27" : "NULL",
    "customproperty28" : "NULL",
    "customproperty29" : "NULL",
    "customproperty30" : "NULL",
    "customproperty31" : "NULL",
    "customproperty32" : "NULL",
    "customproperty33" : "NULL",
    "customproperty34" : "NULL",
    "customproperty35" : "NULL",
    "customproperty36" : "NULL",
    "customproperty37" : "NULL",
    "customproperty38" : "NULL",
    "customproperty39" : "NULL",
    "customproperty40" : "NULL",
    "childEntitlements" : {
      "roles" : [ {
        "entitlementID" : 15553670302865
      }, {
        "entitlementID" : 15553670340241
      } ]
    },
    "owners" : [ "15553759289491" ]
  }, {
    "entitlementID" : 15553670302865,
    "entitlement_value" : "Contributor",
    "description" : "Can provide limited support",
    "displayname" : "Contributor",
    "entitlement_glossary" : "Contributor",
    "status" : "1",
    "entclass" : "Role",
    "customproperty1" : "NULL",
    "customproperty2" : "2023-05-24t06:34:23.000z",
    "customproperty3" : "2023-05-24t06:34:23.000z",
    "customproperty4" : "NULL",
    "customproperty5" : "NULL",
    "customproperty6" : "NULL",
    "customproperty7" : "NULL",
    "customproperty8" : "NULL",
    "customproperty9" : "NULL",
    "customproperty10" : "NULL",
    "customproperty11" : "NULL",
    "customproperty12" : "NULL",
    "customproperty13" : "NULL",
    "customproperty14" : "NULL",
    "customproperty15" : "NULL",
    "customproperty16" : "NULL",
    "customproperty17" : "NULL",
    "customproperty18" : "NULL",
    "customproperty19" : "NULL",
    "customproperty20" : "NULL",
    "customproperty21" : "NULL",
    "customproperty22" : "NULL",
    "customproperty23" : "NULL",
    "customproperty24" : "NULL",
    "customproperty25" : "NULL",
    "customproperty26" : "NULL",
    "customproperty27" : "NULL",
    "customproperty28" : "NULL",
    "customproperty29" : "NULL",
    "customproperty30" : "NULL",
    "customproperty31" : "NULL",
    "customproperty32" : "NULL",
    "customproperty33" : "NULL",
    "customproperty34" : "NULL",
    "customproperty35" : "NULL",
    "customproperty36" : "NULL",
    "customproperty37" : "NULL",
    "customproperty38" : "NULL",
    "customproperty39" : "NULL",
    "customproperty40" : "NULL",
    "owners" : [ "15553759289491" ]
  }, {
    "entitlementID" : 15553670340241,
    "entitlement_value" : "Billing admin",
    "description" : "Can manage all settings, including billing.",
    "displayname" : "Billing admin",
    "entitlement_glossary" : "Billing admin",
    "status" : "0",
    "entclass" : "Role",
    "customproperty1" : "NULL",
    "customproperty2" : "2023-05-24t06:34:23.000z",
    "customproperty3" : "2023-05-24t06:34:23.000z",
    "customproperty4" : "NULL",
    "customproperty5" : "NULL",
    "customproperty6" : "NULL",
    "customproperty7" : "NULL",
    "customproperty8" : "NULL",
    "customproperty9" : "NULL",
    "customproperty10" : "NULL",
    "customproperty11" : "NULL",
    "customproperty12" : "NULL",
    "customproperty13" : "NULL",
    "customproperty14" : "NULL",
    "customproperty15" : "NULL",
    "customproperty16" : "NULL",
    "customproperty17" : "NULL",
    "customproperty18" : "NULL",
    "customproperty19" : "NULL",
    "customproperty20" : "NULL",
    "customproperty21" : "NULL",
    "customproperty22" : "NULL",
    "customproperty23" : "NULL",
    "customproperty24" : "NULL",
    "customproperty25" : "NULL",
    "customproperty26" : "NULL",
    "customproperty27" : "NULL",
    "customproperty28" : "NULL",
    "customproperty29" : "NULL",
    "customproperty30" : "NULL",
    "customproperty31" : "NULL",
    "customproperty32" : "NULL",
    "customproperty33" : "NULL",
    "customproperty34" : "NULL",
    "customproperty35" : "NULL",
    "customproperty36" : "NULL",
    "customproperty37" : "NULL",
    "customproperty38" : "NULL",
    "customproperty39" : "NULL",
    "customproperty40" : "NULL",
    "owners" : [ "15553759289492" ]
  }, {
    "entitlementID" : 15553707898001,
    "entitlement_value" : "Admin",
    "description" : "Can manage all settings, except billing",
    "displayname" : "Admin",
    "entitlement_glossary" : "Admin",
    "status" : "1",
    "entclass" : "Role",
    "customproperty1" : "NULL",
    "customproperty2" : "2023-05-24t06:34:23.000z",
    "customproperty3" : "2023-05-24t06:34:23.000z",
    "customproperty4" : "NULL",
    "customproperty5" : "NULL",
    "customproperty6" : "NULL",
    "customproperty7" : "NULL",
    "customproperty8" : "NULL",
    "customproperty9" : "NULL",
    "customproperty10" : "NULL",
    "customproperty11" : "NULL",
    "customproperty12" : "NULL",
    "customproperty13" : "NULL",
    "customproperty14" : "NULL",
    "customproperty15" : "NULL",
    "customproperty16" : "NULL",
    "customproperty17" : "NULL",
    "customproperty18" : "NULL",
    "customproperty19" : "NULL",
    "customproperty20" : "NULL",
    "customproperty21" : "NULL",
    "customproperty22" : "NULL",
    "customproperty23" : "NULL",
    "customproperty24" : "NULL",
    "customproperty25" : "NULL",
    "customproperty26" : "NULL",
    "customproperty27" : "NULL",
    "customproperty28" : "NULL",
    "customproperty29" : "NULL",
    "customproperty30" : "NULL",
    "customproperty31" : "NULL",
    "customproperty32" : "NULL",
    "customproperty33" : "NULL",
    "customproperty34" : "NULL",
    "customproperty35" : "NULL",
    "customproperty36" : "NULL",
    "customproperty37" : "NULL",
    "customproperty38" : "NULL",
    "customproperty39" : "NULL",
    "customproperty40" : "NULL",
    "childEntitlements" : {
      "roles" : [ {
        "entitlementID" : 15553692240529
      }, {
        "entitlementID" : 15553670302865
      } ]
    },
    "owners" : [ "15553759289491" ]
  } ],
  "count" : 4
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

