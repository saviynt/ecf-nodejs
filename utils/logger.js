const winston = require('winston');

const logger = winston.createLogger({
	level: 'info', // Set the minimum log level (e.g., 'info', 'warn', 'error')
	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format.printf(log => {
			return `<span class="math-inline">\{log\.timestamp\} \[</span>{log.level}] - ${log.message}`;
		})
	),
	transports: [
		new winston.transports.Console(), // Log to console
		new winston.transports.File({ filename: 'application.log' }) // Log to file
	]
});

module.exports = logger;