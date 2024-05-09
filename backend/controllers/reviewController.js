
import Review from '../Models/ReviewSchema.js'
import Doctor from '../Models/DoctorSchema.js'

//get all reviews
export const getAllReviews = async (req, res)=> {
    try {
        const revies = await Review.Find({})
        return res.status(200).json({success:true, message:"All reviews found", data:revies})
    } catch (err) {
        return res.status(404).json("unable to find reviews")
    }   
}

//create reviw
export const createReview = async (req, res)=> {
    if(!req.body.doctor) req.body.doctor = req.params.doctorId
    if(!req.body.patient) req.body.patient = req.userId

    const newReview = new Review(req.body)

    try {
        const savedReview = await newReview.save()

        await Doctor.findByIdAndUpdate(req.body.doctor,{
            $push: {reviews: savedReview._id}
        })
        res
        .status(200)
        .json({success:true, message:"Review saved successfully", data:savedReview})
    } catch (err) {
        return res.status(500).json({success:false, message:err.message})
    }
}