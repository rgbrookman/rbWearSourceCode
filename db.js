const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const cors = require("cors"); //req.body
const Pool = require('pg').Pool;

const pool = new Pool({
  user: "rgbrookman",
  password: "Canar1es",
  host: "localhost",
  port: 5432,
  database: "rbwear_users"
});

module.exports = pool;
