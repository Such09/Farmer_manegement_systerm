import { v2 as cloudinary } from 'cloudinary'
import fs, { existsSync } from 'fs'

cloudinary.config({
  cloud_name: `${process.env.CLOUDINARY_KEY_NAME}`,
  api_key: `${process.env.CLOUDINARY_API_KEY}`,
  api_secret: `${process.env.CLOUDINARY_API_SECREAT}`
});

export const uploadOnCloudinary = async (pic) => {
  try {
    if (!pic) return null

    const result = await cloudinary.uploader.upload(pic, {
      resource_type: "auto"
    });

    fs.unlinkSync(pic)
    return result

  } catch (error) {
    if(pic && fs.existsSync(pic)){
      fs.unlinkSync(pic)
    }

    return null
  }
}