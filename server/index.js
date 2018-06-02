const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');

require('dotenv').config();

const app = express();
app.use(bodyParser.json()); 

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db));

app.post('/auth/callback', controller.register);

const port = 4000;
app.listen(port, () => {console.log(`Server is listening on port ${port}`)});