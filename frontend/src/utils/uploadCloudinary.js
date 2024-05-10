
const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET
const cloudName = import.meta.env.VITE_CLOUD_NAME


const uploadImageToCloudinary = async file => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', uploadPreset)
    formData.append('cloud_name', cloudName)
    
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData
    })
    const data = await res.json()
    return data.secure_url
}

export default uploadImageToCloudinary