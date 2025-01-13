import CollaborationItem from "../../components/ui/pages/Collaboration/CollaborationItem";
import CollaborationItemLoading from "../../components/ui/pages/Collaboration/CollaborationItemLoading";
import { useGetIdentityQuery } from "../../redux-store/api/auth/CollaborationApi";

export interface identity {
    _id: string
    title: string
    icon: string
    description: string
    createdAt: string
    updatedAt: string
    __v: number
    point: number
}

const Collaboration = () => {
    const { data: identityData, isLoading: identityLoading } = useGetIdentityQuery(undefined);

    return (
        <div className="min-h-screen">
            <p className="text-2xl font-montserrat font-bold text-white">Collaboration</p>
            <p className="text-sm text-opacity-50 font-montserrat font-medium text-white">Complete tasks from our collaborators to get more {import.meta.env.VITE_TOKEN_SYMBOL}!
            </p>

            <div className="flex flex-col gap-3 mt-5">
                {
                    identityLoading ? <>
                        <CollaborationItemLoading />
                        <CollaborationItemLoading />
                        <CollaborationItemLoading />
                        <CollaborationItemLoading />
                    </> :
                        identityData?.data?.map((identity: identity, i: number) => (
                            <CollaborationItem identity={identity} key={i} />
                        ))
                }
            </div>
        </div>
    );
};

export default Collaboration;