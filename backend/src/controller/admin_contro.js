import { Admin } from '../model/admin_model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Resister
export const resiterAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body; // Destructuring properties

        const isExist = await Admin.findOne({ email: email });  // find admin exist or not

        if (isExist) {
            return res.status(200).json({
                message: "admin is already exist"
            })
        }

        const hash = await bcrypt.hash(password, 10)  // Convert in hash password

        const admin = await Admin.create({    // Create new user
            name,
            email,
            password: hash      // Store hash password in database
        });

        return res.status(201).json({
            message: "You Resister successfully"
        })
    } catch (error) {
        return res.status(400).json({
            message: "admin is not found"
        })
    }
}

// Login Admin
export const loginAdmin = async (req, res) => {
    try {            
        const { email, password } = req.body

        const admin = await Admin.findOne({ email: email })  // Check admin resiter or not

        if (!admin) {
            return res.status(400).json({
                message: "something went wrong"
            });
        }

        const match = await bcrypt.compare(password, admin.password)  // Compare password

        if (!match) {                       // admin enter wrong password
            res.status(400).json({
                message: "something went wrong"
            });
        }        

        // Create access and refresh token
        const accessToken = jwt.sign({ id: admin._id }, `${process.env.ACCESS_SCREAT}`, { expiresIn: `${process.env.ACCESS_EXPIRY}` })
        const refreshToken = jwt.sign({ id: admin._id }, `${process.env.REFRESH_SCREAT}`, { expiresIn: `${process.env.REFRESH_EXPIRY}` })

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
        admin.refreshToken = refreshToken;
        await admin.save();

        return res.status(200).json({
            message: "user longin successfully."
        })

    } catch (error) {
        return res.status(500).json({
            message: "somethin went wrong"
        })
    }
}

// Logout admin
export const logoutAdmin = async (req, res) => {
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

        const admin = await Admin.findById({ _id: info.id });

        if(!admin){
            return res.status(400).json({
                message: "something went wrong"
            });
        }

        // Remove refreshToken
        admin.refreshToken = "";
        admin.save();

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