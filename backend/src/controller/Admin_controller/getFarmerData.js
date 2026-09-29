import { User } from "../../model/user_model.js";

export const farmersData = async (req, res) => {
    try {
        const { name } = req.query

        const farmer = await User.find({
            name: {
                $regex: `^${name}`,
                $options: "i"
            }
        })

        if (!farmer) {
            res.status(200).json({
                message: "Farmer is not found in database"
            });
        }

        res.status(200).json({
            message: "fetch all farmer",
            farmer
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal network error",
            error
        });
    }
}