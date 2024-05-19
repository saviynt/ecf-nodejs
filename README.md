# ECF Node-JS server application (Integrates Google Sheets)

## Overview
This server application is developed using Node-JS and integrates with Google Sheets as target application. This adheres to ECF API spec as defined <b>[here](https://github.com/saviynt/ExternalConnectorFramework-APISpec/edit/main/spec/OpenAPISpec.yaml)</b>

## Pre-requisite:
1. Node.js: Download and install Node.js from the official website: <b>[nodejs.org](https://nodejs.org/en/download)</b>
2. Enable the Google Sheets API by following <b>[this](https://developers.google.com/sheets/api/quickstart/go)</b> and download the JSON key file (credentials.json).
3. Create a google sheet (Refer <b>[sample sheet](https://docs.google.com/spreadsheets/d/1tZyExhNelfLaI68oBI3DwWly2p1xfY7VJ1k_CaOzoP0/edit#gid=90651461)</b> used while developing this sample application), which will be treated as your target application.
4. Install Visual Studio or any other preferred Node JS IDE.

## Configuration:
1. Clone this repository and import this project to Visual Studio.
2. Copy the downloaded credentials.json to {Base Folder}/utils folder.
3. Update below line in {Base Folder}/utils/googlesheets.js file to refer the credentials.json.
const credentials = require('../utils/external-connector-framework-09842e2d8788.json');
4. Sample code refers <b>[sample sheet](https://docs.google.com/spreadsheets/d/1tZyExhNelfLaI68oBI3DwWly2p1xfY7VJ1k_CaOzoP0/edit#gid=90651461)</b>, since you have created a new sheet, please update spreadsheet ID, sheet names and data ranges in respective {Base Folder}/service/{File based on operation}.
5. Install Required Packages: "npm install googleapis fs readline"

## Running the server
1. Go to Developer Tools in visual studio and run:
```
npm start
```
2. You should get a success message as "Your server is listening on port 8080".
3. Access the swagger UI interface by accessing below URL in your web browser:
```
http://localhost:8080/docs
```
## Trying out the application endpoints:
1. Since this is fully functional Node-JS server code which integrates Googles Sheets, you should be able to try out various operations using Swagger UI.
2. For import operations validate the response returned from API.
3. For provisioning operations validate the updates made to Google Sheet.
   
## Important points to consider:
This is just a sample code to give you head start in your ECF coding jorney. If you are reusing this code or writing a new project. please ensure to incorporate best coding practices.
1. Write code which is optimized for better performance.
2. Use detailed loggers.
3. Don't read/write passwords in plain text (sample code is writing sample password values in plain text in sheet).
4. Add custom logic for request body validation.
5. Implement error handling.
<p align="center">
<b>Happy Coding !!!</b>
</p>
