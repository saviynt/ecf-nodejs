'use strict';


/**
 * This API removes group access from an account
 *
 * body Group_removeAccess_body  (optional)
 * returns inline_response_200_6
 **/
exports.entitlementGroupRemoveAccessPUT = async function(body) {

    const logger = require('../utils/logger');
    var utils = require('../utils/writer.js');

    logger.info("Calling Remove Group Access API...");
    const sheets = require('../utils/googlesheets');
    const spreadsheetId = '1tZyExhNelfLaI68oBI3DwWly2p1xfY7VJ1k_CaOzoP0';

    try {

    const accountID = body.accountID;
    const entitlementID = body.entitlementID;

        // Fetch the data from the sheet
        const dataResponse = await sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: 'Groups_Memberships!A:B', // Specify the range where the accountID and entitlementID are stored
        });

        const values = dataResponse.data.values || [];

        const rowsToClear = values
            .map((row, index) => ({ accountID: row[0], entitlementID: row[1], rowIndex: index + 1 }))
            .filter(({ accountID: rowAccountID, entitlementID: rowEntitlementID }) => rowAccountID === accountID && rowEntitlementID === entitlementID)
            .map(({ rowIndex }) => `Groups_Memberships!A${rowIndex}:B${rowIndex}`);

        const clearResponses = await Promise.all(rowsToClear.map(range =>
            sheets.spreadsheets.values.clear({
                spreadsheetId: spreadsheetId,
                range: range,
            })
        ));


        return {
            errorCode: "0",
            message: "SUCCESS Remove Group Access Completed Successfully"
        };

    } catch (error) {
        // If an error occurs during validation or updating process, respond with error message
        console.error('The API returned an error:', error);

        return {
            errorCode: "-1",
            message: "FAILED " + error.message
        };

    }
}



/**
 * This API grants role access to an account
 *
 * body Role_addAccess_body  (optional)
 * returns inline_response_200_5
 **/
exports.entitlementRoleAddAccessPUT = async function(body) {
    const logger = require('../utils/logger');
    var utils = require('../utils/writer.js');

    logger.info("Calling Add Access to Role API...");
    const sheets = require('../utils/googlesheets');
    const spreadsheetId = '1tZyExhNelfLaI68oBI3DwWly2p1xfY7VJ1k_CaOzoP0';

    try {

        const values = [Object.values(body)];

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: spreadsheetId,
            range: 'Roles_Memberships!A:A', // Assuming data will be written to Sheet1
            valueInputOption: 'RAW',
            requestBody: {
                values: values
            }
        });

        // Respond with success message or further processing based on the response
        return {
            errorCode: "0",
            message: "SUCCESS Add Access To Role Completed Successfully"
        };

    } catch (error) {
        // If an error occurs during validation or updating process, respond with error message
        console.error('The API returned an error:', error);

        return {
            errorCode: "-1",
            message: "FAILED " + error.message
        };

    }
}


/**
 * This API removes role access from an account
 *
 * body Role_removeAccess_body  (optional)
 * returns inline_response_200_7
 **/
exports.entitlementRoleRemoveAccessPUT = async function(body) {
    const logger = require('../utils/logger');
    var utils = require('../utils/writer.js');

    logger.info("Calling Remove Role Access API...");
    const sheets = require('../utils/googlesheets');
    const spreadsheetId = '1tZyExhNelfLaI68oBI3DwWly2p1xfY7VJ1k_CaOzoP0';

    try {

        const accountID = body.accountID;
        const entitlementID = body.entitlementID;

        // Fetch the data from the sheet
        const dataResponse = await sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: 'Roles_Memberships!A:B', // Specify the range where the accountID and entitlementID are stored
        });

        const values = dataResponse.data.values || [];

        const rowsToClear = values
            .map((row, index) => ({ accountID: row[0], entitlementID: row[1], rowIndex: index + 1 }))
            .filter(({ accountID: rowAccountID, entitlementID: rowEntitlementID }) => rowAccountID === accountID && rowEntitlementID === entitlementID)
            .map(({ rowIndex }) => `Roles_Memberships!A${rowIndex}:B${rowIndex}`);

        const clearResponses = await Promise.all(rowsToClear.map(range =>
            sheets.spreadsheets.values.clear({
                spreadsheetId: spreadsheetId,
                range: range,
            })
        ));

        return {
            errorCode: "0",
            message: "SUCCESS Remove Role Access Completed Successfully"
        };

    } catch (error) {
        // If an error occurs during validation or updating process, respond with error message
        console.error('The API returned an error:', error);

        return {
            errorCode: "-1",
            message: "FAILED " + error.message
        };

    }
}


/**
 * This API grants group access to an account
 *
 * body Group_addAccess_body  (optional)
 * returns inline_response_200_4
 **/
exports.put_entitlementgroups = async function(body) {

    const logger = require('../utils/logger');
    var utils = require('../utils/writer.js');

    logger.info("Calling Add Access to Group API...");
    const sheets = require('../utils/googlesheets');
    const spreadsheetId = '1tZyExhNelfLaI68oBI3DwWly2p1xfY7VJ1k_CaOzoP0';

    try {

        const values = [Object.values(body)];

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: spreadsheetId,
            range: 'Groups_Memberships!A:A', // Assuming data will be written to Sheet1
            valueInputOption: 'RAW',
            requestBody: {
                values: values
            }
        });

        // Respond with success message or further processing based on the response
        return {
            errorCode: "0",
            message: "SUCCESS Add Access To Group Completed Successfully"
        };

    } catch (error) {
        // If an error occurs during validation or updating process, respond with error message
        console.error('The API returned an error:', error);

        return {
            errorCode: "-1",
            message: "FAILED " + error.message
        };

    }
}