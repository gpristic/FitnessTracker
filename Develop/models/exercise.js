const mongoose = require('mongoose');

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    date: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: 'Enter the name of the exercise',
            },
            type: {
                type: String,
                trim: true,
                required: 'Enter the type of exercise',
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
            duration: {
                type: Number
            },
        },
    ],
});

const Exercise = mongoose.model('Workout', workoutSchema);

module.exports = Exercise;