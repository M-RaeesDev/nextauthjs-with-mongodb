import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./db/index.js";
import googleuserrouter from "./route/GoogleUserRoute.js";

dotenv.config();
connectDb();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", googleuserrouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
