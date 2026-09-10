import { Router } from "express";
import { creatUser } from "../controller/user_controller.js";

const router = Router();

router.post('/creat_user', creatUser)

export { router }