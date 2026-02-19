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


//routes;
import authRoutes from "./routes/auth.routes";
import testRoutes from  "./routes/test.routes";
import productRoutes from "./routes/product.routes";
import cartRoutes from "./routes/cart.routes";
import orderRoutes from "./routes/order.routes";

app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

export default app;