const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL || 'postgres://xfbrdqxjgdspir:23a85ba54a6faf6169550977b6eac7b75529173e847a25adb6cce02722d569cc@ec2-54-83-50-145.compute-1.amazonaws.com:5432/d2cc9dekdonbdv',
  ssl: true,
});

client.connect();

client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
