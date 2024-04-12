import express from "express";
import {config} from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js"

config();
const app = express();

// Parse JSON bodies :: middleware
app.use(express.json());

//remove this when in production
app.use(morgan("dev"));

app.use("api/v1", appRouter);

export default app;
