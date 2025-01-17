import mongoose from "mongoose";
import "dotenv/config"
import app from "./app";
import AdminModel from "./admin/admin.model";
import SettingModel from "./settings/setting.model";

async function main() {
    await mongoose.connect(process.env.MONGODB_ATLAS_URI as string);
    await defaultAdmin();
    
    app.listen(process.env.PORT, () => {
        console.log(`- LIVE: http://localhost:${process.env.PORT}/`);
    })
}

async function defaultAdmin() {
    const admin = await AdminModel.findOne({});
    if (!admin?._id) {
        const admin = await AdminModel.create({ email: process.env.EMAIL, password: process.env.PASSWORD });
        console.log(`- NEW ADMIN CREATED! ${admin?.email}`);
    }else{
        console.log(`- ALREADY HAVE AN ADMIN! ${admin?.email}`);
    }

    const setting = await SettingModel.findOne({});
    if (!setting?._id) {
        await SettingModel.create({
            botToken: '#',
            channelLink: 'https://t.me/example_channel',
            newcomerBonus: 5000,
            newcomerPremiumReferrelBonus: 15000,
            newcomerReferrelBonus: 10000,
            projectName: 'Example',
            projectSymbol: 'EX',
            referralCommissionRate: 20,
            tonTransferAmount: '0.5',
            tonWalletAddress: '#',
            tonTransferReward: 5000,
            genarelReferringBonus: 1000,
            premiumReferringBonus: 2000
        });
        console.log('- DEFAULT SETTING CREATED');
    }else {
        console.log('- ALREADY HAVE A SETTING');
    }
}

main();