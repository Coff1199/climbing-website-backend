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

exports.getClimbingRoute =  (req, res) => {
    /*try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data : {
                movie
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        })
    }*/
}

exports.createClimbingRoute = (req, res) => {
    /*try {
        const movie = await Movie.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                movie
            }
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }*/
}

exports.updateClimbingRoute = (req, res) => {
    /*try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        res.status(200).json({
            status: 'success',
            data: {
                movie: updatedMovie
            }
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }*/
}

exports.deleteClimbingRoute = (req, res) => {
    
}
