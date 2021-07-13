const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    userName: String,
    age: Number,
    difficulty: {
        type: Number,
        min: 1,
        max: 5,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
    }
}, {
    timestamps: true
});

const poseSchema = new Schema({
    name: {
        type: String,
        enum: ['Child', 'Downward Facing Dog', 'Warrior I', 'Triangle', 'Low Lunge']
    },
   description: String,
   duration: {
       type: Number,
       min: 0,
       max: 120,
       defalut: 30
   }
})

const flowSchema = new Schema({
    name: String,
    category: {
        type: String,
        enum: ['Vinyasa', 'Hatha', 'Yin', 'Power']
    },
    poses: [poseSchema],
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flow', flowSchema);
