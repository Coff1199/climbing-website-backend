const ClimbingRoute = require('../models/climbingRouteModel')


//route handler functions
exports.getAllClimbingRoutes = async (req, res) => {
    try {
        const climbingRoutes = await ClimbingRoute.find();
        res.status(200).json({
            status: "success",
            length: climbingRoutes.length,
            data : {
                climbingRoutes: climbingRoutes
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.getClimbingRoute =  async (req, res) => {
    try {
        const climbingRoute = await ClimbingRoute.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data : {
                climbingRoute
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.createClimbingRoute = (req, res) => {
    
}

exports.updateClimbingRoute = (req, res) => {
    
}

exports.deleteClimbingRoute = (req, res) => {
    
}
