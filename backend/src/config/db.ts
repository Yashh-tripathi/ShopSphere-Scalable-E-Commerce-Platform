import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("MongoDb connected");
    } catch (error) {
        console.log("Mongodb connection failed: ", error);
        process.exit(1);
    }
}
