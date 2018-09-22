// const http = require('http');
// const { Client } = require('pg');
const express = require('express');
// const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
// const { DATABASE_URL } = process.env;

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index');
  res.statusCode = 200;
});

app.listen(PORT, () => {
  // eslint-disable-next-line
	console.log('Example app listening on port ' + PORT + '!');
});

// const server = http.createServer((req, res) => {
//   const client = new Client({
//     connectionString: DATABASE_URL,
//   });
//   res.statusCode = 200;

//   res.setHeader('Content-Type', 'text/plain');
//   client.connect()
//     .then(() => client.query('SELECT * FROM hellotable'))
//     .then((result) => {
//       res.end(`${result.rows[0].name}\n`);
//       client.end();
//     })
//     .catch(() => {
//       res.end('ERROR');
//       client.end();
//     });
// });

// server.listen(PORT, () => {
//   // eslint-disable-next-line
//   console.log(`Server running on ${PORT}/`);
// });
