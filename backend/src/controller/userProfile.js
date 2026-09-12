import { User } from "../model/user_model.js";

export const userProfile = async (req, res) => {
    try {
        const info = req.user

        const user = await User.findOne({ email: info.email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid user"
            });
        }

        return res.status(200).json({
            message: "user is valid",
            user
        });

    } catch (error) {
        return res.status(500).json({
            message: "something went wrong",
            error
        });
    }
}