import mongoose from "mongoose";
import "dotenv/config"
import app from "./app";
import AdminModel from "./admin/admin.model";

async function main() {
    await mongoose.connect(process.env.MONGODB_ATLAS_URI as string);
    await defaultAdmin();
    
    app.listen(process.env.PORT, () => {
        console.log(`http://localhost:${process.env.PORT}/`);
    })
}

async function defaultAdmin() {
    const admin = await AdminModel.findOne({});
    if (!admin?._id) {
        const admin = await AdminModel.create({ email: process.env.EMAIL, password: process.env.PASSWORD });
        console.log(`✔️ NEW ADMIN CREATED! ${admin?._id}`);
    }else{
        console.log(`😍 ALREADY HAVE AN ADMIN! ${admin?._id}`);
    }
}

main();