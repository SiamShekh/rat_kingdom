import mongoose from "mongoose";
import "dotenv/config"
import app from "./app";

async function main() {
    await mongoose.connect(process.env.MONGODB_ATLAS_URI as string);
    
    app.listen(process.env.PORT, ()=> {
        console.log(`http://localhost:${process.env.PORT}/`);
    })
}

main();