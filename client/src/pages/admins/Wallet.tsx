
const Wallet = () => {
    return (
        <div className='min-h-screen text-white font-montserrat'>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='text-white'>
                            <th>User</th>
                            <th>Address</th>
                            <th>Connected time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="flex items-center gap-5">
                                <div className="avatar online placeholder">
                                    <div className="bg-white/20 text-neutral-content w-10 rounded-full">
                                        <span className="text-xl">AI</span>
                                    </div>
                                </div>
                                <div className="font-montserrat font-medium">
                                    <p className="text-sm">Siam Sheikh</p>
                                    <p className="text-xs">48787777878</p>
                                </div>
                            </td>
                            <td>UQDt2bOOixY8__-VYnqI9Du07ydcBmm-Vs1B8HRlE1WMfvH0</td>
                            <td>12-31-2024 12:09 PM</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wallet;