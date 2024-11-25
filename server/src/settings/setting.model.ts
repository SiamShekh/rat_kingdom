import { model, Schema } from "mongoose";
import ProjectSettings from "./setting.interface";

const schema = new Schema<ProjectSettings>({
    adminLoginCode: {
        type: Number,
        required: true
    },
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
    referralRewards: {
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
}, {
    timestamps: true
});

const SettingModel = model('setting', schema);

export default SettingModel;