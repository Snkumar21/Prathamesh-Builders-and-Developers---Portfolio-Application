import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();

/* ===========================
    Middlewares
=========================== */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);
app.use(helmet());
app.use(morgan("dev"));

/* ===========================
    Test Route
=========================== */
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Prathamesh Builders Backend Running 🚀",
    });
});

/* ===========================
    Health Route
=========================== */
app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        server: "Running",
    });
});

/* ===========================
    Server
=========================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(
        `🚀 Server Running on http://localhost:${PORT}`
    );
});