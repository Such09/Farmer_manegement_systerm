import { Router } from "express";
import { creatUser, loginUser } from "../controller/user_controller.js";

const router = Router();

router.post('/creat_user', creatUser)
router.post('/login', loginUser)

export { router }