const express = require('express');
const climbingRouteController = require('../controllers/climbingRouteController');

const climbingRouteRouter =  express.Router();

climbingRouteRouter.route('/')
    .get(climbingRouteController.getAllClimbingRoutes)
    .post(climbingRouteController.createClimbingRoute);

climbingRouteRouter.route('/:id')
    .get(climbingRouteController.getClimbingRoute)
    .patch(climbingRouteController.updateClimbingRoute)
    .delete(climbingRouteController.deleteClimbingRoute);

module.exports = climbingRouteRouter;
