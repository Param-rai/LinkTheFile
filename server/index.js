import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import { DbConnection } from "./database/db.js";

const app = express();
const PORT = 8000;
dotenv.config();

//connection
DbConnection();

// middlewares
app.use(cors());

//routes
app.use("/", router);

app.listen(PORT, () => {
  console.log("server is running at 8000");
});
