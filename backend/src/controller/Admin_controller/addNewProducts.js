import { Fertilizer } from "../../model/fertilizerModel.js";
import { Seeds } from "../../model/seedModel.js";
import { Cropinfo } from "../../model/cropModel.js";
import { uploadOnCloudinary } from "../../config/cloudinary.js";

// Add New Fertilizers
export const addNewFertilizer = async(req, res) => {
    try {
        const pic = req.file?.path
        const { brand, product, info } = req.body;

        if (!pic) {
            return res.status(401).json({
                message: "picture is not find."
            });
        }

        // Upload picture on cloudinary.
        const result = await uploadOnCloudinary(pic);

        // If photo is not Upload or some error
        if (!result) {
            return res.status(401).json({
                message: "picture is not upload on cloudinary."
            });
        }

        const fertilizer = await Fertilizer.create({
            brand: brand,
            name: product,
            description: info,
            image: result.secure_url
        });

        res.status(200).json({
            message: "product add successfully."
        });
        
    } catch (error) {
       res.status(500).json({
            message: "something went wrong"
       });
    }
}

// Add New Seeds
export const addNewSeed = async(req, res) => {
    try {
        const pic = req.file?.path
        const { brand, product, info } = req.body;

        if (!pic) {
            return res.status(401).json({
                message: "picture is not find."
            });
        }

        // Upload picture on cloudinary.
        const result = await uploadOnCloudinary(pic);

        // If photo is not Upload or some error
        if (!result) {
            return res.status(401).json({
                message: "picture is not upload on cloudinary."
            });
        }

        const seed = await Seeds.create({
            brand: brand,
            name: product,
            image: result.secure_url,
            info: info
        });

        res.status(200).json({
            message: "product add successfully."
        });
        
    } catch (error) {
       res.status(500).json({
            message: "something went wrong"
       });
    }
}

// Add New Crop
export const addNewCrop = async(req, res) => {
    try {
        const pic = req.file?.path
        const { name, fertilizer, info, soil, varieties, disease, harvest, land } = req.body;

        if (!pic) {
            return res.status(401).json({
                message: "picture is not find."
            });
        }

        // Upload picture on cloudinary.
        const result = await uploadOnCloudinary(pic);

        // If photo is not Upload or some error
        if (!result) {
            return res.status(401).json({
                message: "picture is not upload on cloudinary."
            });
        }

        const crop = await Cropinfo.create({
            name: name,
            img: result.secure_url,
            basicInfo: info,
            disease: disease,
            varieties: varieties,
            harvest: harvest,
            fertilizer: fertilizer,
            land_preparation: land,
            soil_health: soil
        });

        res.status(200).json({
            message: "product add successfully."
        });
        
    } catch (error) {
       res.status(500).json({
            message: "something went wrong"
       });
    }
}