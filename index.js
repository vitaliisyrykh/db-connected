const {Client}= require('pg');

const config = {
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'test'
}

const dbClient = new Client (config);

(async () => {
  await dbClient.connect();

  await dbClient.query(
    `CREATE TABLE "from_node_test" ("id" serial PRIMARY KEY);

    
    `);

  await dbClient.end();
})();