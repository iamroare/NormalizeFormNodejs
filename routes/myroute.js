import { Router } from "express";

const router = Router();

import * as controller from "../controllers/appController.js";


router.post("/user/signup", controller.signup);
router.post("/user/login", controller.login);


export default router;