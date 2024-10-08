const mongoose = require('mongoose');

const climbingRouteSchema = new mongoose.Schema({
    grade: {
        type: String,
        required: [true, 'Grade is required field'],
    },
    name: {
        type: String,
        required: [true, 'Name is required field'],
        unique: true
    },
    setter: String,
    flashes: {
        type: Number,
        default: 0
    },
    sends: {
        type: Number,
        default: 0
    }
});

const ClimbingRoute = mongoose.model('ClimbingRoute', climbingRouteSchema);

module.exports = ClimbingRoute;