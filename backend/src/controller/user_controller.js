import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from "../model/user_model.js";

// Resister
export const creatUser = async (req, res) => {
    try {
        const { name, email, password } = req.body; // Destructuring properties

        const isExist = await User.findOne({ email: email });  // find user exist or not

        if (isExist) {
            return res.status(200).json({
                message: "user is already exist"
            })
        }

        const hash = await bcrypt.hash(password, 10)  // Convert in hash password

        const user = await User.create({    // Create new user
            name,
            email,
            password: hash      // Store hash password in database
        });

        return res.status(201).json({
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

        const user = await User.findOne({ email: email })  // Check user resiter or not

        if (!user) {
            return res.status(400).json({
                message: "email is not resiter create your account"
            })
        }

        const match = await bcrypt.compare(password, user.password)  // Compare password

        if (!match) {                       // user enter wrong password
            res.status(400).json({
                message: "something went wrong"
            })
        }

        // Create access and refresh token
        const accessToken = jwt.sign({ email: email }, `${process.env.ACCESS_SCREAT}`, { expiresIn: `${process.env.ACCESS_EXPIRY}` })
        const refreshToken = jwt.sign({ email: email }, `${process.env.REFRESH_SCREAT}`, { expiresIn: `${process.env.REFRESH_EXPIRY}` })

        // Set cookies on Brower
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: false,      // false ? access HTTP & HTTPS : only HTTPS
            sameSite: 'lax',
            maxAge: 5 * 60 * 1000
        })

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 10 * 60 * 1000
        })

        // Save refreshToken is Database
        user.refreshToken = refreshToken;
        await user.save();

        return res.status(200).json({
            message: "user longin successfully."
        })

    } catch (error) {
        return res.status(400).json({
            message: "user is not found"
        })
    }
}

// Logout user
export const logoutUser = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(200).json({
                message: "token is expire."
            })
        }

        const info = jwt.verify(refreshToken, process.env.REFRESH_SCREAT)

        if (!info) {
            return res.status(400).json({
                message: "Invalid token."
            })
        }

        const user = await User.findOne({ email: info.email });

        if(!user){
            return res.status(400).json({
                message: "something went wrong"
            });
        }

        // Remove refreshToken
        user.refreshToken = "";
        user.save();

        // Remove cookies from Broser
        res.clearCookie("accessToken", {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        });

        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        });

        return res.status(200).json({
            message: "Logout successfuly"
        });

    } catch (error) {
        return res.status(500).json({
            message: "something went wrong"
        });
    }
}