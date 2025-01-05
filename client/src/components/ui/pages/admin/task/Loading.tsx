
const TaskLoading = () => {
    return (
        <tr >
            <td>
                <div className="w-32 h-6 bg-white/20 skeleton rounded-md"></div>
            </td>
            <td>
                <div className="w-16 h-6 bg-white/20 skeleton rounded-md"></div>
            </td>
            <td>
                <div className="w-28 h-6 bg-white/20 skeleton rounded-md"></div>
            </td>
            <td>
                <div className="w-24 h-6 bg-white/20 skeleton rounded-md"></div>
            </td>
            <td>
                <div className="w-32 h-6 bg-white/20 skeleton rounded-md"></div>
            </td>
            <td>
                <div className="w-20 h-6 bg-white/20 skeleton rounded-md"></div>
            </td>
            <td className="flex items-center gap-3">
                <div className="w-16 h-6 bg-white/20 skeleton rounded-md"></div>
                <div className="w-16 h-6 bg-white/20 skeleton rounded-md"></div>
            </td>
        </tr>
    );
};

export default TaskLoading;