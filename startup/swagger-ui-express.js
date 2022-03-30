var appRoot = require('app-root-path');
const swaggerUi = require('swagger-ui-express');
const docs = require('../docs');

module.exports = function(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));
};