import { FormProvider, useForm } from "react-hook-form";
import Input from "../../../../components/Input";
import task from "../../../../../types/tasks.interface";
import { useCreateTaskForAdminMutation } from "../../../../../redux-store/api/auth/TaskInfoApi";

const AddNewTask = ({ open, close }: { open: boolean, close: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const methods = useForm<task>();
    const [mutation] = useCreateTaskForAdminMutation();
    const HandleAddNew = (e: task) => {
        console.log(e);
        
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
                            label="What is the task title?"
                            name="title"
                            placeholder="title..."
                            labelColor="text-white"
                        />
                        <Input
                            label="How much point user get?"
                            name="point"
                            placeholder="point..."
                            labelColor="text-white"
                            type="number"
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
                                <span className="label-text text-white">Pick the type</span>
                            </div>
                            <select {...methods.register('type')} className="select select-bordered bg-white/20 ">
                                <option disabled defaultValue={'social'}>Pick one</option>
                                <option className="text-black" value={'friend'}>Friend</option>
                                <option className="text-black" value={'special'}>Special</option>
                                <option className="text-black" value={'social'}>Social</option>
                            </select>
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-white">Pick the recuring?</span>
                            </div>
                            <select {...methods.register('recuring')} className="select select-bordered bg-white/20 ">
                                <option disabled defaultValue={'one_time'}>Pick one</option>
                                <option className="text-black" value={'one_time'}>one_time</option>
                                <option className="text-black" value={`multiple`}>multiple</option>
                            </select>
                        </label>
                        <Input
                            label="What is the task link?"
                            name="href"
                            placeholder="href..."
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

export default AddNewTask;