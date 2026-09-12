import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from "../model/user_model.js";

// Resister
export const creatUser = async (req, res) => {
    try {
        const { name, email, password, refreshToken, avatar } = req.body;

        // Hash password
        const hash = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hash,
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

// Login user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email: email })

        if (!user) {
            return res.status(200).json({
                message: "first create your account"
            })
        }

        // Compare password
        const match = await bcrypt.compare(password, user.password)

        if (match) {
            const accessToken = jwt.sign({ email: email }, `${process.env.ACCESS_SCREAT}`, { expiresIn: `${process.env.ACCESS_EXPIRY}` })
            const refreshToken = jwt.sign({ email: email }, `${process.env.REFRESH_SCREAT}`, { expiresIn: `${process.env.REFRESH_EXPIRY}` })
        

            res.cookie("accessToken", accessToken, {
                httpOnly: true,
                secure: false,      // false ? access HTTP & HTTPS : only HTTPS
                sameSite: 'lax',
                maxAge: 10 * 60 * 1000
            })

            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,      // false ? access HTTP & HTTPS : only HTTPS
                sameSite: 'lax',
                maxAge: 15 * 60 * 1000
            })

            user.refreshToken = refreshToken;
            await user.save();

            console.log("Login successfully...");
        }else{
            res.status(400).json({
                message: "something went wrong"
            })
        }

    } catch (error) {
        return res.status(400).json({
            message: "user is not found"
        })
    }
}

// Logout user
export const logoutUser = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if(!refreshToken){
            return res.status(400).json({
                message: "token is expire."
            })
        }

        const info = jwt.verify(refreshToken, process.env.REFRESH_SCREAT)

        if(!info){
            return res.status(400).json({
                message: "Invalid token."
            })
        }

        console.log("refresh token info: ", info);
        

    } catch (error) {
        res.status(500).json({
            message: "something went wrong"
        })
    }
}