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
        required: [true, 'flashes is required field'], 
        default: 0
    },
    sends: {
        type: Number,
        required: [true, 'sends is required field'], 
        default: 0
    }
});

const ClimbingRoute = mongoose.model('ClimbingRoute', climbingRouteSchema);

module.exports = ClimbingRoute;