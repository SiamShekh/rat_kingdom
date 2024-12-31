import { FormProvider, useForm } from "react-hook-form";
import Input from "../../../../components/Input";
import task from "../../../../../types/tasks.interface";
import { useEffect } from "react";

const UpdateTask = ({ open, close }: { open: Partial<task> | undefined, close: React.Dispatch<React.SetStateAction<Partial<task> | undefined>> }) => {
    const methods = useForm<task>({
        defaultValues: open
    });
    const da = (e) => {
        console.log(e);
    }
    console.log(open);
    
    useEffect(() => {
        if (open !== undefined) {
            console.log(open);
            methods.reset(open); // Resetting form with new default values
        }
    }, [open, methods]);
    return (
        <dialog id="my_modal_5" open={open?._id ? true : false} className="modal backdrop-blur-sm modal-bottom sm:modal-middle duration-500">
            <div className="modal-box bg-black border border-white/30">
                <h3 className="font-bold text-lg">Add Task</h3>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(da)} className="flex flex-col gap-3">
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
                                <option className="text-black">Telegram</option>
                                <option className="text-black">X</option>
                                <option className="text-black">Facebook</option>
                                <option className="text-black">Youtube</option>
                                <option className="text-black">Visit</option>
                            </select>
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-white">Pick the type</span>
                            </div>
                            <select {...methods.register('type')} className="select select-bordered bg-white/20 ">
                                <option disabled defaultValue={'Social'}>Pick one</option>
                                <option className="text-black">Friend</option>
                                <option className="text-black">Special</option>
                                <option className="text-black">Social</option>
                            </select>
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-white">Pick the recuring?</span>
                            </div>
                            <select {...methods.register('recuring')} className="select select-bordered bg-white/20 ">
                                <option disabled defaultValue={'one_time'}>Pick one</option>
                                <option className="text-black">one_time</option>
                                <option className="text-black">multiple</option>
                            </select>
                        </label>
                        <Input
                            label="What is the task link?"
                            name="link"
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

export default UpdateTask;