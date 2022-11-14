require('dotenv').config();
const express = require('express');

// routes
const usersRoutes = require('./routes/users.routes');

// init app
const app = express();

app.use(express.json());

// endpoints
app.use('/api/v1', usersRoutes);


module.exports = app;
