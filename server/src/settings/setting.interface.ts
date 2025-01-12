interface ProjectSettings {
    projectName: string; 
    projectSymbol: string;  
    referralCommissionRate: number;
    newcomerBonus: number; 
    newcomerReferrelBonus: number; 
    newcomerPremiumReferrelBonus: number; 
    genarelReferringBonus: Number,
    premiumReferringBonus: Number,
    tonWalletAddress: string; 
    tonTransferAmount: number;
    tonTransferReward: number;
    botToken: string,
    channelLink: string
}

export default ProjectSettings;
