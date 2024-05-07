import mongoose from "mongoose";

const currentDate = () => {
    return new Date()
};

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type:String, required: true},
    phone: {type : Number},
    photo : {type : String},
    role: {
        type: String,
        enum: ["patient", "admin"],
        default: "patient",
    },
    created_at: { type: Date, default: currentDate },
    gender:{type:String, enum: ["male", "female", "other"],},
    bloodType : {type:String},
    appointment: [{type: mongoose.Types.ObjectId, ref: "Appointment"}]
})

export default mongoose.model("User", UserSchema)