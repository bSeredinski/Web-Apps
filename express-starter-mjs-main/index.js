import express from 'express';
import fs from 'fs';
const port = 8080;
import path from 'path';

const app = express();

app.get('/', (req, res) => {

})

app.get('/kontakt', (req, res) => {
  res.status(200).sendFile(__dirname + '/htmls/kontakt');
})

app.get('/oferta', (req, res) => {

})

app.get('/onas/', (req, res) => {})

app.listen(8080, () => {
  console.log('App is running on https://localhost:3000')
})
