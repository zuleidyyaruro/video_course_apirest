require('dotenv').config();
const express = require('express');
const errorHandler = require('./middlewares/error.middleware');

// routes
const usersRoutes = require('./routes/users.routes');
const coursesRoutes = require('./routes/courses.routes');
const videosRoutes = require('./routes/videos.routes');

// init app
const app = express();

app.use(express.json());

// endpoints
app.use('/api/v1', usersRoutes);
app.use('/api/v1', coursesRoutes);
app.use('/api/v1', videosRoutes);

app.use(errorHandler);

module.exports = app;
