const BalanceCard = ({balance}: {balance: number}) => {
    return (
        <div>
            <img src={import.meta.env.VITE_ICON} alt="logo" className="size-28 mx-auto" />
            <p className="text-white font-montserrat text-center text-2xl font-medium">{balance}</p>
            <p className="text-white font-montserrat text-center text-2xl font-medium text-opacity-50">{import.meta.env.VITE_TOKEN_SYMBOL}</p>
        </div>
    );
};

export default BalanceCard;