import { Router } from "express";
import { creatUser, loginUser, logoutUser } from "../controller/user_controller.js";
import { isValidUser } from "../middleware/isValidUser.js";
import { addCrop, crops_info, removeCropRecord, userProfile } from "../controller/userProfile.js";
import { fertilizers, seeds } from "../controller/argri_product_controller.js";
import { upload } from "../middleware/fileUploder.js";
import { scanCrop } from "../controller/scanCropPhoto.js";
import { cropInfo } from "../controller/cropInfo_contro.js";
import { loginAdmin, logoutAdmin, resiterAdmin } from "../controller/admin_contro.js";
import { adminProfile } from "../controller/Admin_controller/adminProfile.js";

const router = Router();

// User Authentication
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

// update Farmer Details
router.patch('/addcrop', addCrop);
router.get(`/crops`, isValidUser, crops_info);
router.patch(`/rm_record/:id`, isValidUser, removeCropRecord);

// Scan crops data Gemini AI 
router.post(`/scan`, upload.single("crop"), scanCrop)


// Admin Authentication
router.post(`/resister_admin`, resiterAdmin);
router.post(`/login_admin`, loginAdmin);
router.get(`/logout_admin`, logoutAdmin);

// Valid admin
router.get(`/ad_profile`, isValidUser, adminProfile);

export { router }