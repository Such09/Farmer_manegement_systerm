import { Router } from "express";
import { creatUser, loginUser, logoutUser } from "../controller/user_controller.js";
import { isValidUser } from "../middleware/isValidUser.js";
import { userProfile } from "../controller/userProfile.js";
import { fertilizers, seeds } from "../controller/argri_product_controller.js";
import { upload } from "../middleware/fileUploder.js";
import { scanCrop } from "../controller/scanCropPhoto.js";
import { cropInfo } from "../controller/cropInfo_contro.js";

const router = Router();

// Authentication
router.post('/creat_user', creatUser);
router.post('/login', loginUser);
router.get(`/logout`, logoutUser);

// Valid user
router.get(`/profile`, isValidUser, userProfile);

// Agri products
router.get('/fertilizer', fertilizers);
router.get(`/seed`, seeds);

// Search
router.get(`/cropinfo`, cropInfo);

// Scan crops data Gemini AI 
router.post(`/scan`, upload.single("crop"), scanCrop)

export { router }