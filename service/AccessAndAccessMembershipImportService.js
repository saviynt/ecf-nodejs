'use strict';


/**
 * This API returns the list of account entitlement association for entitlement type group
 *
 * returns groupsmembership
 **/
exports.getAccountsGroup_memberships = async function () {

    const logger = require('../utils/logger');
    logger.info("Fetching Groups membership list...");
    var examples = {};
    const sheets = require('../utils/googlesheets');
    const spreadsheetId = '1tZyExhNelfLaI68oBI3DwWly2p1xfY7VJ1k_CaOzoP0';

    try {

        const headerRange = 'Groups_Memberships!1:1'; // Range for header row
        const headerResponse = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: headerRange,
        });

        const headers = headerResponse.data.values[0];

        // Calculate range based on offset and pageSize
        const dataStartRow = 2; // Offset starts from data row 1 (after header)
        const range = `Groups_Memberships!A${dataStartRow}:B`;

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const rows = response.data.values;

        if (rows.length) {
            const count = rows.length;
            const group_memberships = rows.map(row => {
                const membership = {};
                headers.forEach((header, index) => {
                    membership[header] = Number(row[index]);
                });
                return membership;
            });

            examples = JSON.stringify({
                group_memberships: group_memberships
            }, null, 2);

        } else {

            examples = JSON.stringify({
                group_memberships: []
            }, null, 2);
        }
    } catch (err) {
        console.error('The API returned an error:', err);
    }

    return examples;


}


/**
 * This API returns the list of account entitlement association for entitlement type role
 *
 * returns rolesmembership
 **/
exports.getAccountsRole_memberships = async function() {

    const logger = require('../utils/logger');
    logger.info("Fetching Roles membership list...");
    var examples = {};
    const sheets = require('../utils/googlesheets');
    const spreadsheetId = '1tZyExhNelfLaI68oBI3DwWly2p1xfY7VJ1k_CaOzoP0';

    try {

        
        const headerRange = 'Roles_Memberships!1:1'; // Range for header row
        const headerResponse = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: headerRange,
        });

        const headers = headerResponse.data.values[0];

        // Calculate range based on offset and pageSize
        const dataStartRow = 2; // Offset starts from data row 1 (after header)
        const range = `Roles_Memberships!A${dataStartRow}:B`;

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const rows = response.data.values;

        if (rows.length) {
            const count = rows.length;
            const role_memberships = rows.map(row => {
                const membership = {};
                headers.forEach((header, index) => {
                    membership[header] = Number(row[index]);
                });
                return membership;
            });

            examples = JSON.stringify({
                role_memberships: role_memberships
            }, null, 2);

        } else {

            examples = JSON.stringify({
                role_memberships: []
            }, null, 2);
        }
    } catch (err) {
        console.error('The API returned an error:', err);
    }

    return examples;

}


/**
 * This API returns the list of group type entitlements
 *
 * body Entitlements_groups_body  (optional)
 * offset Integer  (optional)
 * pagesize Integer  (optional)
 * returns groups
 **/
exports.postEntitlementsGroups = async function(body,offset=0,pagesize=10) {

    const logger = require('../utils/logger');
    logger.info("Fetching Groups entitlement list...");
    var examples = {};
    const sheets = require('../utils/googlesheets');
    const spreadsheetId = '1tZyExhNelfLaI68oBI3DwWly2p1xfY7VJ1k_CaOzoP0';

    try {

        const totalResponse = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'Entitlements_Groups!A:A', // Assuming 'A' column contains IDs and it's continuous
        });
        const totalCount = totalResponse.data.values ? totalResponse.data.values.length - 1 : 0; // Subtract 1 for the header row

        const headerRange = 'Entitlements_Groups!1:1'; // Range for header row
        const headerResponse = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: headerRange,
        });

        const headers = headerResponse.data.values[0];

        // Calculate range based on offset and pageSize
        const dataStartRow = offset + 2; // Offset starts from data row 1 (after header)
        const range = `Entitlements_Groups!A${dataStartRow}:F${dataStartRow + pagesize - 1}`;

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const rows = response.data.values;

        if (rows.length) {
            const totalCount = rows.length;
            const groups = rows.map(row => {
                const group = {};
                headers.forEach((header, index) => {
                    if (header === 'childEntitlements') {
                        // Parse multi-valued data into an array of objects
                        const childEntitlements = row[index].split(',').map(value => {
                            const entitlementID = value.replace(/"/g, '').trim();
                            return { entitlementID };
                        });
                        group[header] = { groups: childEntitlements };
                    } else if (header === 'owners') {
                        // Parse multi-valued data into an array of strings
                        const owners = row[index].split(',').map(value => value.trim().replace(/"/g, ''));
                        group[header] = owners;
                    } else {
                        group[header] = row[index];
                    }
                });
                return group;
            });

            examples = JSON.stringify({
                offset: offset,
                pagesize: pagesize,
                totalCount: totalCount,
                groups: groups
            }, null, 2);

        } else {

            examples = JSON.stringify({
                offset: offset,
                pagesize: pagesize,
                totalCount: totalCount,
                groups: []
            }, null, 2);
        }
    } catch (err) {
        console.error('The API returned an error:', err);
    }

    return examples;
}


/**
 * This API returns the list of role type entitlements
 *
 * body Entitlements_roles_body  (optional)
 * offset Integer  (optional)
 * pagesize Integer  (optional)
 * returns roles
 **/
exports.postEntitlementsRoles = async function(body,offset=0,pagesize=10) {

    const logger = require('../utils/logger');
    logger.info("Fetching Roles entitlement list...");
    var examples = {};
    const sheets = require('../utils/googlesheets');
    const spreadsheetId = '1tZyExhNelfLaI68oBI3DwWly2p1xfY7VJ1k_CaOzoP0';

    try {

        const totalResponse = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'Entitlements_Roles!A:A', // Assuming 'A' column contains IDs and it's continuous
        });
        const totalCount = totalResponse.data.values ? totalResponse.data.values.length - 1 : 0; // Subtract 1 for the header row

        const headerRange = 'Entitlements_Roles!1:1'; // Range for header row
        const headerResponse = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: headerRange,
        });

        const headers = headerResponse.data.values[0];

        // Calculate range based on offset and pageSize
        const dataStartRow = offset + 2; // Offset starts from data row 1 (after header)
        const range = `Entitlements_Roles!A${dataStartRow}:F${dataStartRow + pagesize - 1}`;

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const rows = response.data.values;

        if (rows.length) {
            const totalCount = rows.length;
            const roles = rows.map(row => {
                const role = {};
                headers.forEach((header, index) => {
                    if (header === 'childEntitlements') {
                        // Parse multi-valued data into an array of objects
                        const childEntitlements = row[index].split(',').map(value => {
                            const entitlementID = value.replace(/"/g, '').trim();
                            return { entitlementID };
                        });
                        role[header] = { roles: childEntitlements };
                    } else if (header === 'owners') {
                        // Parse multi-valued data into an array of strings
                        const owners = row[index].split(',').map(value => value.trim().replace(/"/g, ''));
                        role[header] = owners;                       
                    } else {
                        role[header] = row[index];
                    }
                });
                return role;
            });

            examples = JSON.stringify({
                offset: offset,
                pagesize: pagesize,
                totalCount: totalCount,
                roles: roles
            }, null, 2);

        } else {

            examples = JSON.stringify({
                offset: offset,
                pagesize: pagesize,
                totalCount: totalCount,
                roles: []
            }, null, 2);
        }
    } catch (err) {
        console.error('The API returned an error:', err);
    }

    return examples;
}
