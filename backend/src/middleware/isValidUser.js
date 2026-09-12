import jwt from "jsonwebtoken";
import { updateAccessToken } from "./updateAccessToken.js";

export const isValidUser = async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken        

        const info = jwt.verify(accessToken, `${process.env.ACCESS_SCREAT}`)

        req.user = info;
        
        next();
    } catch (error) {
        updateAccessToken(req, res, next)
    }
}