const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const urlRoutes = require('./routes/urlRoutes');

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', urlRoutes);

mongoose.connect(process.env.mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
