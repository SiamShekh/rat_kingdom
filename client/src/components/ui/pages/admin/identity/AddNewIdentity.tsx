import { FormProvider, useForm } from "react-hook-form";
import Input from "../../../../components/Input";
import { Identity } from "../../../../../pages/admins/CollaborationIdentity";
import { useAddIdentityMutation } from "../../../../../redux-store/api/auth/IdentityApi";

const AddNewIdentity = ({ open, close }: { open: boolean, close: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const methods = useForm<Identity>();
    const [mutation] = useAddIdentityMutation();
    const HandleAddNew = (e: Identity) => {
        mutation(e);
        close(false);
    }

    return (
        <dialog id="my_modal_5" open={open} className="modal backdrop-blur-sm modal-bottom sm:modal-middle duration-500">
            <div className="modal-box bg-black border border-white/30">
                <h3 className="font-bold text-lg">Add Task</h3>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(HandleAddNew)} className="flex flex-col gap-3">
                        <Input
                            label="What is the identity name?"
                            name="title"
                            placeholder="title..."
                            labelColor="text-white"
                        />
                        <Input
                            label="What is the icon?"
                            name="icon"
                            placeholder="icon..."
                            labelColor="text-white"
                            type="url"
                        />
                        
                        <Input
                            label="What is the identity description?"
                            name="description"
                            placeholder="description..."
                            labelColor="text-white"
                        />
                        <button className="font-montserrat text-white font-medium bg-white/10 px-8 py-2 rounded-md hover:bg-white hover:text-black duration-500" type="submit">Submit</button>
                    </form>
                </FormProvider>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="font-montserrat text-white font-medium bg-white/10 px-8 py-2 rounded-md hover:bg-white hover:text-black duration-500" onClick={() => close(false)}>Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default AddNewIdentity;