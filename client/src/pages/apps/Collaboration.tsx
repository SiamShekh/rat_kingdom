import CollaborationItem from "../../components/ui/pages/Collaboration/CollaborationItem";

const Collaboration = () => {
    return (
        <div className="min-h-screen">
            <p className="text-2xl font-montserrat font-bold text-white">Collaboration</p>
            <p className="text-sm text-opacity-50 font-montserrat font-medium text-white">Complete tasks from our collaborators to get more {import.meta.env.VITE_TOKEN_SYMBOL}!
            </p>

            <div className="flex flex-col gap-3 mt-5">
                <CollaborationItem />
                <CollaborationItem />
                <CollaborationItem />
                <CollaborationItem />
            </div>
        </div>
    );
};

export default Collaboration;