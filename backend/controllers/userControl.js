import User from '../Models/UserSchema.js'
import Booking from '../Models/BookingSchema.js'
import Doctor from '../Models/DoctorSchema.js'

export const updateUser = async(req, res) =>{
    const id = req.params.id

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true}
        );

        res
        .status(200)
        .json({
            success: true, 
            message: "Successfully updated",
             data: updatedUser
        })
    } catch (error) {
        res.status(500).json({success: false, message: "failed to update"})
    }
}

export const deleteUser = async(req, res) =>{
    const id = req.params.id

    try {
         await User.findByIdAndDelete(
            id
        );

        res
        .status(200)
        .json({
            success: true, 
            message: "Successfully deleted"
        })
    } catch (error) {
        res.status(500).json({success: false, message: "failed to delete"})
    }
}

export const getSingleUser = async(req, res) =>{
    const id = req.params.id

    try {
        const user = await User.findById(
            id
        ).select("-password");

        res
        .status(200)
        .json({
            success: true, 
            message: "User Successfully found",
            data: user
        })
    } catch (error) {
        res.status(404).json({success: false, message: "No user found"})
    }
}


export const getAllUser = async(req, res) =>{

    try {
        const users = await User.find({}
        ).select("-password");

        res
        .status(200)
        .json({
            success: true, 
            message: "Users found",
            data: users
        })
    } catch (error) {
        res.status(500).json({success: false, message: "Not found"})
    }
}


export const getUserProfile = async(req, res) =>{
    const userId = req.userId

    try {
        const user = await User.findById(userId)

        if(!user){
            return res.status(404).json({success: false, message: "User not found"})
        }
        const {password, ...rest} = user._doc

        res
        .status(200)
        .json({
            success: true, 
            message: "fetching user info",
            data:{...rest}
        })

    } catch (error) {
        return res.status(500).json({success: false, message: "Unable to perform this action"})
    }
}

export const getMyAppointments = async (req, res) => {
    try {

        //step1. retrieve appointment from booking for specific user
        const appointments = await Booking.find({user: req.userId})

        //step2. extract doctor ids from appointment booking
        const doctorIds = appointments.map(appointment => appointment.doctor.id)

        //step3. retrieve doctor using doctor id
        const doctors = await Doctor.find({_id: {$in: doctorIds}}).select('-password')

        res.status(200).json({success:true, message:'Appointment are getting', data:doctors})
        
    } catch (error) {
        res.status(500).json({success:false, message:'something went wrong'})
    }
}