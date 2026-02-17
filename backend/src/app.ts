import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config({
    path: "./.env"
});

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173"
}));
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({extended: true}));


app.get("/", (_req, res) => {
    res.send("API running...")
  });

export default app;