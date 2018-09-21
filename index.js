const http = require('http');
const { Client } = require('pg');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
const { DATABASE_URL } = process.env;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  // eslint-disable-next-line
	console.log('Example app listening on port 3000!');
});

const server = http.createServer((req, res) => {
  const client = new Client({
    connectionString: DATABASE_URL,
  });
  res.statusCode = 200;

  client.connect();

  // res.setHeader('Content-Type', 'text/plain');
  // client.connect()
  //   .then(() => client.query('SELECT * FROM hellotable'))
  //   .then((result) => {
  //     res.end(`${result.rows[0].name}\n`);
  //     client.end();
  //   })
  //   .catch(() => {
  //     res.end('ERROR');
  //     client.end();
  //   });
});

server.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server running on ${PORT}/`);
});
