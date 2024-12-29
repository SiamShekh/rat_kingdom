import toast from "react-hot-toast";

const DeleteConfirmission = ({ show, close }: { show: string| undefined, close: React.Dispatch<React.SetStateAction<string | undefined>> }) => {
    return (
        <div>
            <dialog open={show ? true : false} className="modal backdrop-blur-md">
                <div className="modal-box text-black">
                    <h3 className="font-bold text-lg">Really!</h3>
                    <p className="py-4">Are you sure you want to delete the task?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn" onClick={()=> close(undefined)}>Close</button>
                            <button className="btn bg-red-500 ml-5" onClick={()=> toast.success('Deleted')}>Yes</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default DeleteConfirmission;