// Routes/adminOnly.js
import express from "express";
import { authenticateUser } from "../middlewares/auth.js";
import { checkSuperAdmin } from "../middlewares/checkSuperAdmin.js";

const router = express.Router();

router.get("/admin-products", authenticateUser, checkSuperAdmin, (req, res) => {
  res.json({ message: "Welcome, Super Admin. Here are your products." });
});

export default router;
