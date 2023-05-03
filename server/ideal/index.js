const express = require('express');
const app = express();
const port = 3000;
const router = require('./router/router');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});




