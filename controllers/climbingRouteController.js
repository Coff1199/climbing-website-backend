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

exports.createClimbingRoute = async (req, res) => {
    try {
        const newClimbingRoute = await ClimbingRoute.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                climbingRoute: newClimbingRoute
            }
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
}

exports.updateClimbingRoute = async (req, res) => {
    try {
        const updatedClimbingRoute = await ClimbingRoute.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        res.status(200).json({
            status: 'success',
            data: {
                climbingRoute: updatedClimbingRoute
            }
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
}

exports.deleteClimbingRoute = (req, res) => {
    
}
