const express = require('express');
const climbingRouteRouter = require('./routes/climbingRouteRouter')
const suggestionFormRouter = require('./routes/suggestionFormRouter')
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())
app.use('/api/v1/climbing-routes/', climbingRouteRouter)
app.use('/api/v1/form-data/', suggestionFormRouter)

module.exports = app;