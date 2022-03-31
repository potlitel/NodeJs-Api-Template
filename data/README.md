# Seeding Starter

## Setup

Create .env file and add a 'DB_URI' property. Navigate to /data directory and run 'DEBUG=mongo-seeding node index.js'

npm install -g mongo-seeding-cli

PS G:\Trabajo\GitProjects\Real-Projects\NodeJsApiTemplate> seed --drop-database --replace-id --set-timestamps --db-name jwt-project ./data
  mongo-seeding Reading collections from G:\Trabajo\GitProjects\Real-Projects\NodeJsApiTemplate\data... +0ms
  mongo-seeding Transforming collections... +287ms
  mongo-seeding Starting collection import... +1ms
  mongo-seeding Connecting to mongodb://127.0.0.1:27017/jwt-project... +1ms
  mongo-seeding Connection with database established. +26ms
  mongo-seeding Dropping database... +1ms
  mongo-seeding Inserting 37 documents into collection categories... +36ms
(node:18404) DeprecationWarning: isConnected is deprecated and will be removed in the next major version
(Use `node --trace-deprecation ...` to show where the warning was created)
  mongo-seeding Finishing... +30ms
