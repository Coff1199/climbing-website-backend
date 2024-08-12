const express = require('express');
const climbingRouteRouter = require('./routes/climbingRouteRouter')
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())
app.use('/api/v1/climbing-routes/', climbingRouteRouter)

module.exports = app;