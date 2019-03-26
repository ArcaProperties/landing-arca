const express = require('express');

const request = require('request');
const dotenv = require('dotenv');

const app = express();
const PORT = process.env.PORT || 5000;
const { Pool } = require('pg');

dotenv.config();

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('pages/index');
  res.statusCode = 200;
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.get('/signup', (req, res) => {
  res.render('pages/signup');
});

app.get('/faq', (req, res) => {
  res.render('pages/faq');
});

app.get('/landlords', (req, res) => {
  res.render('pages/landlords');
});

app.get('/app', (req, res) => {
  res.render('pages/app');
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://xfbrdqxjgdspir:23a85ba54a6faf6169550977b6eac7b75529173e847a25adb6cce02722d569cc@ec2-54-83-50-145.compute-1.amazonaws.com:5432/d2cc9dekdonbdv',
  ssl: true,
});

pool.query('INSERT INTO items (id, text, complete) VALUES ($1, $2, $3)', ['12345', 'read bible', false]).then((res) => {
  console.log(res);
  pool.end();
}).catch((err) => {
  console.log(err);
  pool.end();
});

app.listen(PORT, () => {
  // eslint-disable-next-line
	console.log('Example app listening on port ' + PORT + '!');
});

const options = {
  method: 'GET',
  url: 'https://arca.eu.auth0.com/api/v2/users',
  qs: { q: 'email:"alexshuseiwada@gmail.com"', search_engine: 'v3' },
  headers: { authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlEwSkVORVl4TnpNME5EQXlOVVk0T0RNd01VUkRNemN3TkRFNE56WTFSa00yTTBFNE5UZERSUSJ9.eyJpc3MiOiJodHRwczovL2FyY2EuZXUuYXV0aDAuY29tLyIsInN1YiI6ImFZR0dzeTdtRFZaOEU0NTBCZlpXeUlHSmhFZ2p1dDE1QGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FyY2EuZXUuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE1NDE3OTg3MjcsImV4cCI6MTU0MTg4NTEyNywiYXpwIjoiYVlHR3N5N21EVlo4RTQ1MEJmWld5SUdKaEVnanV0MTUiLCJzY29wZSI6InJlYWQ6Y2xpZW50X2dyYW50cyBjcmVhdGU6Y2xpZW50X2dyYW50cyBkZWxldGU6Y2xpZW50X2dyYW50cyB1cGRhdGU6Y2xpZW50X2dyYW50cyByZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBkZWxldGU6dXNlcnMgY3JlYXRlOnVzZXJzIHJlYWQ6dXNlcnNfYXBwX21ldGFkYXRhIHVwZGF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgZGVsZXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDp0ZW5hbnRfc2V0dGluZ3MgdXBkYXRlOnRlbmFudF9zZXR0aW5ncyByZWFkOmxvZ3MgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.UEuGs6UD1yg74Dggkw4pNLyowKlNJ4Cc5pYffuVjR9-Wb72uGZQomfMiKfM4ml5HjXkyFIeyydeqDvtB0sxNVNFzWfJ-rVr99uqeHUJ6qGrz1sH9HkAYUvv60ed4OtcNn6ED1iV9N2j085N6t6wgHXUTKrXDyq6GkvLYcFfdQZNILm-yrqeLSeY3uL6eZGxpcIr_bZjgLbIjxA8-TDCici8PmGdcmcvR9CnA2XHPIKJA5xpMib-d0NiG4PW4BuPLvIY0Vul7MUDaVzEPaa8mUvW_pZYD7T3X-FwRuKfp1uaM52Q9mQ3dti6dncEzDyuyqgtFj1h9itXSfxqWMyIEiw' },
};

const userData = request(options, (error, response, body) => {
  if (error) throw new Error(error);
  return body;
});

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM test_table');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results);
    console.log(results);
    console.log(userData);
    client.release();
  } catch (err) {
    console.error(err);
    res.send(err);
  }
});
