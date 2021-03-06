//@flow
require('dotenv').config();
import express from 'express';
import fetch from 'node-fetch';
const app = express();
const port = 80;
const dukcapilHost = process.env.DUKCAPIL_HOST || 'localhost:3000';
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/item/:id', async(req, res) => {
  if (req.params && req.params.id) {
    let fetchPromise = await fetch(`${dukcapilHost}/item/${req.params.id}`);
    let fetchResult = await fetchPromise.json();
    res.send(fetchResult);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
