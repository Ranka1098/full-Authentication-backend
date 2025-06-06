import express from "express";
import register from "../../controller/Authentication_controller/register.js";
import resendOtp from "../../controller/Authentication_controller/resendOtp.js";
import verifyOtp from "../../controller/Authentication_controller/verifyOtp.js";
import login from "../../controller/Authentication_controller/login.js";
import logout from "../../controller/Authentication_controller/logout.js";

const AuthRouter = express.Router();

AuthRouter.post("/register", register);
AuthRouter.post("/resendOtp", resendOtp);
AuthRouter.post("/verifyOtp", verifyOtp);
AuthRouter.post("/login", login);
AuthRouter.post("/logout", logout);

export default AuthRouter;
