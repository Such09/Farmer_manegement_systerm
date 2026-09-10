import { User } from "../model/user_model.js";

export const creatUser = async(req, res) => {
    try {
        const { name, email, password, refreshToken, avatar } = req.body;

        const user = await User.create({
            name,
            email,
            password,
            refreshToken,
            avatar
        });

        return res.status(200).json({
            message: "user create successfully"
        })        
    } catch (error) {
        return res.status(400).json({
            message: "user is not found"
        })
    }
}