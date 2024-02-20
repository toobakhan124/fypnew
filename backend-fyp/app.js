import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js";
import categoryRoutes from './routes/categoryRoutes.js'
import adoptionRoutes from './routes/adoptionRoutes.js'
import { config } from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import adminRoutes from './routes/adminRoutes.js'
const app = express();
config({ path: "./config/config.env" });

app.use(
  cors({
    origin: 'http://localhost:5173', 
    credentials: true,
    method: ["GET", "POST", "DELETE", "PUT"],
  })
);


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/adoption", adoptionRoutes);
app.use("/api/v1/admin", adminRoutes);
dbConnection();

app.use(errorMiddleware);
export default app;
