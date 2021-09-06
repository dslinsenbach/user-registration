// Load required dependencies
const compression = require('compression');
const express = require('express');

const app = express();
const path = require('path');
const logger = require('./api/v1/helpers/logging');

// Load local environment variables from dotenv if not in production
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Initialize Express App
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.json());
app.use(compression());
app.use(express.static(path.join(__dirname, '../public')));

// Initialize Routes
const adminRoutes = require('./api/v1/routes/admin.routes');
const registrationRoutes = require('./api/v1/routes/registration.routes');
const viewRoutes = require('./api/v1/routes/views.routes');

app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/register', registrationRoutes);
app.use('/', viewRoutes);

// Start listening with Express
app.listen(process.env.PORT, () => {
  logger.info(`Express server listening on port ${process.env.PORT}...`);
});
