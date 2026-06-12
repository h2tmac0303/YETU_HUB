import express from "express";
import { corsConfig } from "./config/cors.js";
import indexRoute from "./routes/index.js";

const app = express();

app.use(corsConfig);
app.use(express.json());

app.use("/", indexRoute);

export default app;