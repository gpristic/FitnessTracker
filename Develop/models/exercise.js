const mongoose = require('mongoose');

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    date: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'Enter the type of exercise',
            },
            name: {
                type: String,
                trim: true,
                required: 'Enter the name of the exercise',
            },
            duration: {
                type: Number
            },
            
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            
        },
    ],
});

const Exercise = mongoose.model('Workout', workoutSchema);

module.exports = Exercise;