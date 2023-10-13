import UserSchema from "../Models/UserSchema";

export const updateUser = async(req, res)=>{
    const id = req.params.id

    try{
        const updatedUser = await User.findByIdAndUpdate(id, {$set:req.body}, {mew:true})

        res.status(200).json({sucess:true, message:"succesfully updated", data: updatedUser})
    }catch (err){
        res.status(500).json({sucess:false, message:"failed to update"})
    }
};


export const deleteUser = async(req, res)=>{
    const id = req.params.id

    try{
       await User.findByIdAndDelete(id); 

        res.status(200).json({sucess:true, message:"succesfully deleted"})
    }catch (err){
        res.status(500).json({sucess:false, message:"failed to delete"})
    }
};


export const getSingleUser = async(req, res)=>{
    const id = req.params.id

    try{
       const user = await User.findById(id); 

        res.status(200).json({sucess:true, message:"user found"})
    }catch (err){
        res.status(404).json({sucess:false, message:"No user found"})
    }
};


export const getAllUser = async(req, res)=>{
    const id = req.params.id

    try{
       const user = await User.find({}); 

        res.status(200).json({sucess:true, message:"user found", data: users})
    }catch (err){
        res.status(404).json({sucess:false, message:"No user found"})
    }
};