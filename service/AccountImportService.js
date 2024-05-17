'use strict';



/**
 * This API returns the list of accounts
 *
 * body Accounts_body  (optional)
 * offset Integer  (optional)
 * pagesize Integer  (optional)
 * returns accounts
 **/
exports.postAccounts = async function (body, offset = 0, pagesize = 10) {

    const logger = require('../utils/logger');

    logger.info("Fetching accounts list...");
    var examples = {};  
    const sheets = require('../utils/googlesheets');
    const spreadsheetId = '1tZyExhNelfLaI68oBI3DwWly2p1xfY7VJ1k_CaOzoP0';

try {
   
    const totalResponse = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'Accounts!A:A', // Assuming 'A' column contains IDs and it's continuous
    });
    const totalCount = totalResponse.data.values ? totalResponse.data.values.length - 1 : 0; // Subtract 1 for the header row

    const headerRange = 'Accounts!1:1'; // Range for header row
    const headerResponse = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: headerRange,
    });

    const headers = headerResponse.data.values[0];

    // Calculate range based on offset and pageSize
    const dataStartRow = offset + 2; // Offset starts from data row 1 (after header)
    const range = `Accounts!A${dataStartRow}:F${dataStartRow + pagesize - 1}`;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    
    const rows = response.data.values;
    if (rows.length) {
	  const accounts = rows.map(row => {
        const account = {};
        headers.forEach((header, index) => {
          account[header] = row[index] || ''; // Ensure each header has a corresponding value
        });
        return account;
      });

	  examples = JSON.stringify({
        offset: offset,
        pagesize: pagesize,
        totalCount: totalCount,
        accounts: accounts
      }, null, 2);

    } else {
	  
	  examples = JSON.stringify({
        offset: offset,
        pagesize: pagesize,
        totalCount: totalCount,
        accounts: []
      }, null, 2);
    }
} catch (err) {
    console.error('The API returned an error:', err);
  }	

    return examples;    
}

