'use strict';


/**
 * This API updates a user
 *
 * body Updateuser  (optional)
 * userName String 
 * returns inline_response_200
 **/
exports.patchUpdateUser = async function(body,userName) {
    const logger = require('../utils/logger');
    var utils = require('../utils/writer.js');

    logger.info("Calling Update User API...");
    const sheets = require('../utils/googlesheets');
    const spreadsheetId = '1tZyExhNelfLaI68oBI3DwWly2p1xfY7VJ1k_CaOzoP0';

    try {

        // Fetch the existing data from the Google Sheet
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: 'Users!A:E', // Assuming data is in columns A to Z
        });

        // Extract the values from the response
        const values = response.data.values || [];

        // Find the row where userName matches
        let rowIndex = -1;
        values.some((row, index) => {
            if (row[0] === userName) { // Assuming accountID is in the first column
                rowIndex = index;
                return true; // Stop iterating once the matching row is found
            }
        });

        // If accountID is not found in the Google Sheet, throw an error
        if (rowIndex === -1) {
            throw new Error("No record found with the provided userName.");
        }

        var rowData = response.data.values[rowIndex];

        // Extract the header values from the response
        const headers = response.data.values[0];

        const updateObject = {};
        headers.forEach((header, index) => {
            if (body.hasOwnProperty(header)) {

                if (header === 'status') {

                    var statusValue = parseInt(body.status);
                    updateObject[header] = statusValue === 1 ? 'Active' : 'Inactive';


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
            updateObject['status'] = statusValue === 1 ? 'Active' : 'Inactive';
        }


        // Update the data in the Google Sheet
        const updateResponse = await sheets.spreadsheets.values.update({
            spreadsheetId: spreadsheetId,
            range: `Users!A${rowIndex + 1}:Z${rowIndex + 1}`, // Assuming rowIndex is calculated
            valueInputOption: 'RAW',
            requestBody: {
                values: [Object.values(updateObject)]
            }
        });

        // Respond with success message or further processing based on the response
        return {
            errorCode: "0",
            message: "SUCCESS User Updated Successfully"
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
