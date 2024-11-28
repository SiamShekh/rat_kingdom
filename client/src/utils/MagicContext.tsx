import { createContext, ReactNode, useEffect, useState } from "react";
import { useMyInfoContextQuery } from "../redux-store/api/auth/ContextInfoApi";
import User from "../types/users.interface";

type value = {
    user: User | null,
}

export const MagicCP = createContext<value | null>(null);
const MagicContext = ({ children }: { children: ReactNode }) => {
    const data = useMyInfoContextQuery(undefined);
    // const [user, setUser] = useState<User | null>(null);
    
    const value: value = {
        user: data?.data?.data
    }
    return (
        <MagicCP.Provider value={value}>
            {children}
        </MagicCP.Provider>
    );
};

export default MagicContext;