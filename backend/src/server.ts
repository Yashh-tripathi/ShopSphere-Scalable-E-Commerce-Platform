import app from "./app";
import { connectDb } from "./config/db";

const PORT = process.env.PORT || 4000;


connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    });
})
