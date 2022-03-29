var appRoot = require('app-root-path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require(`${appRoot}/docs/basicInfo`);

module.exports = function(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};