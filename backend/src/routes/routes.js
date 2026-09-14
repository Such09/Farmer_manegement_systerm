import { Router } from "express";
import { creatUser, loginUser, logoutUser } from "../controller/user_controller.js";
import { isValidUser } from "../middleware/isValidUser.js";
import { userProfile } from "../controller/userProfile.js";
import { fertilizers } from "../controller/fertilizer_controller.js";
import { upload } from "../middleware/fileUploder.js";
import { scanCrop } from "../controller/scanCropPhoto.js";

const router = Router();

// Authentication
router.post('/creat_user', creatUser);
router.post('/login', loginUser);
router.get(`/logout`, logoutUser);

// Valid user
router.get(`/profile`, isValidUser, userProfile);

// Search data
router.get('/fertilizer', fertilizers);

// Scan crops data Gemini AI 
router.post(`/scan`, upload.single("crop"), scanCrop)

export { router }