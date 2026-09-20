import jwt from "jsonwebtoken";
import { User } from "../model/user_model.js";

export const updateAccessToken = async (req, res, next) => {
    try {
        const refreshToken = req.cookies.refreshToken

        const info = jwt.verify(refreshToken, `${process.env.ACCESS_SCREAT}`);

        const user = await User.findOne({ id: info._id })

        if (refreshToken !== user.refreshToken) {
            return res.status(401).json({
                message: "refresh token is not valid",
            });
        }

        const accessToken = jwt.sign({ id: _id }, `${process.env.ACCESS_SCREAT}`, { expiresIn: `${process.env.ACCESS_EXPIRY}` })

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: false,      // false ? access HTTP & HTTPS : only HTTPS
            sameSite: 'lax',
            maxAge: 5 * 60 * 1000
        })

        req.user = info;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid token",
            error
        });
    }
}