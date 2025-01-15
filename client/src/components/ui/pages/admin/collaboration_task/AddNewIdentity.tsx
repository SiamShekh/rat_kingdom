import { FormProvider, useForm } from "react-hook-form";
import Input from "../../../../components/Input";
import { CollaborationTask } from "../../../../../pages/admins/CollaborationTask";
import { useGetIdentityIdQuery, useNewCollaborationTaskMutation } from "../../../../../redux-store/api/auth/CollaborationTaskApi";

interface item {
    _id: string
    title: string
}

const AddNewCollaborationTask = ({ open, close }: { open: boolean, close: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const methods = useForm<CollaborationTask>();
    const [mutation] = useNewCollaborationTaskMutation();
    const { isFetching, data } = useGetIdentityIdQuery(undefined);

    const HandleAddNew = (e: CollaborationTask) => {
        mutation({ ...e, recuring: 'one_time' });
        close(false);
    }

    return (
        <dialog id="my_modal_5" open={open} className="modal backdrop-blur-sm modal-bottom sm:modal-middle duration-500">
            <div className="modal-box bg-black border border-white/30">
                <h3 className="font-bold text-lg">Add Task</h3>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(HandleAddNew)} className="flex flex-col gap-3">
                        <Input
                            label="What is the title?"
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
                            label="What is the href?"
                            name="href"
                            placeholder="href..."
                            labelColor="text-white"
                            type="url"
                        />

                        <Input
                            label="How much is the reward point?"
                            name="point"
                            placeholder="point..."
                            labelColor="text-white"
                        />
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-white">Pick the category</span>
                            </div>
                            <select {...methods.register('category')} className="select select-bordered bg-white/20 ">
                                <option disabled defaultValue={'Pick one'}>Pick one</option>
                                <option className="text-black" value={'telegram'}>Telegram</option>
                                <option className="text-black" value={'x'}>X</option>
                                <option className="text-black" value={'facebook'}>Facebook</option>
                                <option className="text-black" value={'youtube'}>Youtube</option>
                                <option className="text-black" value={'visit'}>Visit</option>
                            </select>
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-white">Pick the category</span>
                            </div>
                            <select disabled={isFetching} {...methods.register('identity')} className="select select-bordered bg-white/20 ">
                                <option disabled defaultValue={'Pick one'}>Pick one</option>
                                {
                                    data?.data?.map((item: item, i: number) => (
                                        <option className="text-black" key={i} value={item?._id}>{item?.title}</option>
                                    ))
                                }
                            </select>
                        </label>
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

export default AddNewCollaborationTask;