import { Cropinfo } from "../model/cropModel.js";

// Search Crop 
export const cropInfo = async (req, res) => {
    try {
        const { name } = req.query

        const crop = await Cropinfo.find({
            name: {
                $regex: `^${name}$`,
                $options: "i"
            }
        })

        return res.status(200).json({
            message: "data fetch successfully.",
            data: crop
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong"
        });
    }
}