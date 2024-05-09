import mongoose from "mongoose";
import Doctor from '../Models/DoctorSchema.js'

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
    })
    next()
})

reviewSchema.statics.calcAverageRating = async function (doctorId) {
    const stats = await this.aggregate([
        {
            $match: {doctor: doctorId}
        },
        {
            $group: {
                _id: '$doctor',
                nRating: {$sum: 1},
                avgRating: {$avg: '$rating'}
            }
        }
    ])
    
    await Doctor.findByIdAndUpdate(doctorId, {
        totalRating: stats[0].nRating,
        averageRating: stats[0].avgRating,
    })
}

reviewSchema.post("save", function() {
    this.constructor.calcAverageRating(this.doctor)
})

const Review = mongoose.model('Review', reviewSchema)
export default Review