'use strict';


/**
 * This API returns the list of users
 *
 * body Users_body  (optional)
 * offset Integer  (optional)
 * pagesize Integer  (optional)
 * returns users
 **/
exports.postUsers = async function(body,offset=0,pagesize=10) {

    const logger = require('../utils/logger');
    logger.info("Fetching Users list...");

    var examples = {};
    const sheets = require('../utils/googlesheets');
    const spreadsheetId = '1tZyExhNelfLaI68oBI3DwWly2p1xfY7VJ1k_CaOzoP0';

    try {

        const totalResponse = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'Users!A:A', // Assuming 'A' column contains IDs and it's continuous
        });
        const totalCount = totalResponse.data.values ? totalResponse.data.values.length - 1 : 0; // Subtract 1 for the header row

        const headerRange = 'Users!1:1'; // Range for header row
        const headerResponse = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: headerRange,
        });

        const headers = headerResponse.data.values[0];

        // Calculate range based on offset and pageSize
        const dataStartRow = offset + 2; // Offset starts from data row 1 (after header)
        const range = `Users!A${dataStartRow}:D${dataStartRow + pagesize - 1}`;

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const rows = response.data.values;
        if (rows.length) {
            const users = rows.map(row => {
                const user = {};
                headers.forEach((header, index) => {
                    user[header] = row[index] || ''; // Ensure each header has a corresponding value
                });
                return user;
            });

            examples = JSON.stringify({
                offset: offset,
                pagesize: pagesize,
                totalCount: totalCount,
                users: users
            }, null, 2);

        } else {

            examples = JSON.stringify({
                offset: offset,
                pagesize: pagesize,
                totalCount: totalCount,
                users: []
            }, null, 2);
        }
    } catch (err) {
        console.error('The API returned an error:', err);
    }

    return examples;
}