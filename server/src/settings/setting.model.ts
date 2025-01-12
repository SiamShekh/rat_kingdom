import { model, Schema } from "mongoose";
import ProjectSettings from "./setting.interface";

const schema = new Schema<ProjectSettings>({
    projectName: {
        type: String,
        required: true
    },
    projectSymbol: {
        type: String,
        required: true
    },
    newcomerBonus: {
        type: Number,
        required: true
    },
    referralCommissionRate: {
        type: Number,
        required: true
    },
    newcomerReferrelBonus: {
        type: Number,
        required: true
    },
    newcomerPremiumReferrelBonus: {
        type: Number,
        required: true
    },
    tonTransferAmount: {
        type: Number,
        required: true
    },
    tonWalletAddress: {
        type: String,
        required: true
    },
    channelLink: {
        type: String,
        required: true
    },
    botToken: {
        type: String,
        required: true
    },
    tonTransferReward: {
        type: Number,
        required: true
    },
    genarelReferringBonus: {
        type: Number,
        required: true
    },
    premiumReferringBonus: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

const SettingModel = model('setting', schema);

export default SettingModel;