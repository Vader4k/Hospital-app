import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Types.ObjectId,
        ref: "Doctor",
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    reviewText: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        required: true,
        min:0,
        max:5,
        default: 0,
    },
},

{timestamps: true}

)

reviewSchema.pre(/^find/, function(next){
    this.populate({
        path: 'user',
        select: 'name photo'
    }).populate({
        path: 'doctor',
        select: 'name photo'
    })
    next()
})

const Review = mongoose.model('Review', reviewSchema)
export default Review