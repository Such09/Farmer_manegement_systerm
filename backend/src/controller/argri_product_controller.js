import { Fertilizer } from "../model/fertilizerModel.js";
import { Seeds } from "../model/seedModel.js";

// Fertilizer
export const fertilizers = async (req, res) => {
    try {
        const fertilizerData = await Fertilizer.find()

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

// Seed
export const seeds = async (req, res) => {
    try {
        const seedData = await Seeds.find()

        return res.status(200).json({
            message: "data fetch successfully.",
            data: seedData
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong"
        });
    }
}