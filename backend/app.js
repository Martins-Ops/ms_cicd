require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT;

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.get('/', (_, res) => {
  res.send('Welcome to MartOps');
});

app.use((_, res, next) => {
  res.send('INVALID ROUTE');
  next();
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
