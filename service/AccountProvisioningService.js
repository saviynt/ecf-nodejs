'use strict';


/**
 * This API deletes an account
 *
 * accountID String 
 * returns inline_response_200_2
 **/
exports.deleteRemoveAccount = async function(accountIDInput) {
    const logger = require('../utils/logger');
    var utils = require('../utils/writer.js');

    logger.info("Calling Remove Account API...");
    const sheets = require('../utils/googlesheets');
    const spreadsheetId = '1tZyExhNelfLaI68oBI3DwWly2p1xfY7VJ1k_CaOzoP0';

    try {

       
        // Fetch the data from the sheet
        const dataResponse = await sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: 'Accounts!A:G', 
        });


        const values = dataResponse.data.values || [];

        const rowsToDelete = values
            .map((row, index) => ({ rowIndex: index + 1, accountID: parseInt(row[0]) }))
            .filter(({ accountID }) => accountID === parseInt(accountIDInput))
            .map(({ rowIndex }) => ({
                deleteRange: {
                    range: {
                        sheetId: 0, // The ID of the sheet where you want to delete rows
                            startRowIndex: rowIndex - 1, // Adjusted to 0-based index
                            endRowIndex: rowIndex // Delete only this row
            },
                            shiftDimension: "ROWS"
        }
    }));

        
        const batchUpdateRequest = {
    requests: rowsToDelete
};

const deleteResponses = await sheets.spreadsheets.batchUpdate({
    spreadsheetId: spreadsheetId,
    resource: batchUpdateRequest
});

        logger.info("Clear responses:", clearResponses);

        
        return {
            errorCode: "0",
            message: "SUCCESS Remove Account Completed Successfully"
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
 * This API updates an account
 *
 * body Object  (optional)
 * accountID String 
 * no response value expected for this operation
 **/
exports.patchUpdateAccount = async function(body,accountID) {

    const logger = require('../utils/logger');
    var utils = require('../utils/writer.js');

    logger.info("Calling Update Account API...");
    const sheets = require('../utils/googlesheets');
    const spreadsheetId = '1tZyExhNelfLaI68oBI3DwWly2p1xfY7VJ1k_CaOzoP0';

    try {
        
        // Fetch the existing data from the Google Sheet
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: 'Accounts!A:G', // Assuming data is in columns A to Z
        });

        // Extract the values from the response
        const values = response.data.values || [];

        // Find the row where accountID matches
        let rowIndex = -1;
        values.some((row, index) => {
            if (row[0] === accountID) { // Assuming accountID is in the first column
                rowIndex = index;
                return true; // Stop iterating once the matching row is found
            }
        });

        // If accountID is not found in the Google Sheet, throw an error
        if (rowIndex === -1) {
            throw new Error("No record found with the provided accountID.");
        }

        var rowData = response.data.values[rowIndex];

        // Extract the header values from the response
        const headers = response.data.values[0];

        const updateObject = {};
        headers.forEach((header, index) => {
            if (body.hasOwnProperty(header)) {

                // Perform transformation for the 'status' parameter
                if (header === 'status') {
                        var statusValue = parseInt(body.status);
                        updateObject[header] = statusValue === 1 ? 'enabled' : 'disabled';
                    
                } else {
                    updateObject[header] = body[header];
                    
                }
            } else {
                // If a key is missing in the body, retain the existing value from the Google Sheet
                updateObject[header] = rowData[index] || '';
            }
        });

        if (body.hasOwnProperty('statuskey')) {
            var statusValue = parseInt(body.statuskey);
            updateObject['status'] = statusValue === 1 ? 'enabled' : 'disabled';
        }

        // Update the data in the Google Sheet
        const updateResponse = await sheets.spreadsheets.values.update({
            spreadsheetId: spreadsheetId,
            range: `Accounts!A${rowIndex + 1}:Z${rowIndex + 1}`, // Assuming rowIndex is calculated
            valueInputOption: 'RAW',
            requestBody: {
                values: [Object.values(updateObject)]
            }
        });
        
        // Respond with success message or further processing based on the response
        return {
            errorCode: "0",
            message: "SUCCESS Account Updated Successfully"
        };

    } catch (error) {
        // If an error occurs during validation or updating process, respond with error message
        console.error('The API returned an error:', error);

        return {
            errorCode: "-1",
            message: "FAILED " + error.message
        };
        
    }
};



/**
 * This API creates an account
 *
 * body Createaccount  (optional)
 * returns inline_response_200_1
 **/
exports.postCreateAccount = async function (body) {
    const logger = require('../utils/logger');
    const utils = require('../utils/writer.js');

    logger.info("Calling Create Account API...");
    const sheets = require('../utils/googlesheets');
    const spreadsheetId = '1tZyExhNelfLaI68oBI3DwWly2p1xfY7VJ1k_CaOzoP0';
    try {
        // Check if body contains the mandatory parameter accountID
        if (!body || !body.accountID) {
            throw new Error("Missing mandatory parameter: accountID");
        }

        // Fetch the header row from the Google Sheet to get the list of column headers
        const headerResponse = await sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: 'Accounts!1:1', // Assuming headers are in the first row
        });

        // Extract the header values from the response
        const headers = headerResponse.data.values[0];

        // Prepare the values array to be appended to the Google Sheet
        const values = [];

        // Map the keys of the JSON body to the corresponding headers in the Google Sheet
        const rowData = [];
        headers.forEach(header => {
            // If the header exists in the JSON body, add its value to the rowData array
            if (body.hasOwnProperty(header)) {
                if (header === 'status') {
                    
                    rowData.push(parseInt(body.status) === 1 ? 'enabled' : 'disabled');
                    }
                    else
                    {
                        rowData.push(body[header]);
                    }
            } 
            else {
                // If the header doesn't exist in the JSON body, add an empty string
                if (header == 'status') {
                    rowData.push(parseInt(body.statuskey) === 1 ? 'enabled' : 'disabled');
                }
                else { rowData.push(''); }

            }
        });


        values.push(rowData);

        // Append the data to the Google Sheet for Account provisioning
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: spreadsheetId,
            range: 'Accounts!A:A',
            valueInputOption: 'RAW',
            requestBody: {
                values: values
            }
        });

        logger.info("setting password");

        const values1 = [];
        const rowData1 = [];
        rowData1.push(body.accountID);
        if (!body.password) {
            rowData1.push('StaticValue');
            
        }
        else {
            rowData1.push(body.password);
            
        }
        values1.push(rowData1);
        // Append the data to the Google Sheet with static password provisioning
        const response1 = await sheets.spreadsheets.values.append({
            spreadsheetId: spreadsheetId,
            range: 'Accounts_Password!A:A',
            valueInputOption: 'RAW',
            requestBody: {
                values: values1
            }
        });

        return {
            errorCode: "0",
            message: "SUCCESS Account Created Successfully"
        };

    } catch (error) {
        // If an error occurs during validation or appending process, respond with error message
        utils.writeJson(res, { error: error.message }, 400); // Assuming 400 is the appropriate HTTP status code for bad request
    }
};



/**
 * This API can be used to change password of an account
 *
 * body ChangePassword_body  (optional)
 * returns inline_response_200_3
 **/
exports.put_changePassword = async function(body) {

    const logger = require('../utils/logger');
    var utils = require('../utils/writer.js');

    logger.info("Calling Change Password API...");
    const sheets = require('../utils/googlesheets');
    const spreadsheetId = '1tZyExhNelfLaI68oBI3DwWly2p1xfY7VJ1k_CaOzoP0';

    try {

        const accountID = body.accountID;
        
        // Fetch the existing data from the Google Sheet
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: 'Accounts_Password!A:B', // Assuming data is in columns A to B 
        });

        // Extract the values from the response
        const values = response.data.values || [];

        // Find the row where userName matches
        let rowIndex = -1;
        values.some((row, index) => {
            if (row[0] === accountID) { // Assuming accountID is in the first column
                rowIndex = index;
                return true; // Stop iterating once the matching row is found
            }
        });

        // If accountID is not found in the Google Sheet, throw an error
        if (rowIndex === -1) {
            throw new Error("No record found with the provided accountID.");
        }

        var rowData = response.data.values[rowIndex];

        // Update the data in the Google Sheet
        const updateResponse = await sheets.spreadsheets.values.update({
            spreadsheetId: spreadsheetId,
            range: `Accounts_Password!A${rowIndex + 1}:B${rowIndex + 1}`, // Assuming rowIndex is calculated
            valueInputOption: 'RAW',
            requestBody: {
                values: [Object.values(body)]
            }
        });

        // Respond with success message or further processing based on the response
        return {
            errorCode: "0",
            message: "SUCCESS Password Changed Successfully"
        };

    } catch (error) {
        // If an error occurs during validation or updating process, respond with error message
        console.error('The API returned an error:', error);

        return {
            errorCode: "-1",
            message: "FAILED " + error.message
        };

    }
};

