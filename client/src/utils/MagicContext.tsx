import { createContext, ReactNode, useEffect } from "react";
import User from "../types/users.interface";
import { useLazyMyInfoQuery } from "../redux-store/api/auth/UserInfoApi";

type value = {
    user: User | null,
}

export const MagicCP = createContext<value | null>(null);
const MagicContext = ({ children }: { children: ReactNode }) => {
    const { pathname } = location;
    const [trigger, { data }] = useLazyMyInfoQuery();
    useEffect(() => {
        if (!pathname.includes('/admin')) {
            trigger(undefined);
        }
    }, [pathname])
    // const [user, setUser] = useState<User | null>(null);

    const value: value = {
        user: data?.data
    }
    return (
        <MagicCP.Provider value={value}>
            {children}
        </MagicCP.Provider>
    );
};

export default MagicContext;