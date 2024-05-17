const { google } = require('googleapis');
const fs = require('fs');
const readline = require('readline');


// Load credentials from JSON file
const credentials = require('../utils/external-connector-framework-09842e2d8788.json');

// Create a new JWT client using the credentials
const auth = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

// Create a new instance of Google Sheets API
const sheets = google.sheets({ version: 'v4', auth });
  
module.exports = sheets;
