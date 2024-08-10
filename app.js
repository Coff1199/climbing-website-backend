const express = require('express');
const climbingRouteRouter = require('./routes/climbingRouteRouter')
const app = express();

app.use(express.json());
app.use('/api/v1/climbing-routes/', climbingRouteRouter)

module.exports = app;