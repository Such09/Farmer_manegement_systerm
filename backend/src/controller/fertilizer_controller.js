import { Fertilizer } from "../model/fertilizerModel.js";

export const fertilizers = async (req, res) => {
    try {
        const { brand } = req.query

        const fertilizerData = await Fertilizer.find({brand: brand})

        return res.status(200).json({
            message: "data fetch successfully.",
            data: fertilizerData
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong"
        });
    }
}