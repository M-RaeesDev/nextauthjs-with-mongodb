import express from "express";
import createOrUpdateUser from "../controllers/GoogleUserController.js";

const googleuserrouter = express.Router();

// POST /api/users/google
googleuserrouter.post("/google", createOrUpdateUser);

export default googleuserrouter;
