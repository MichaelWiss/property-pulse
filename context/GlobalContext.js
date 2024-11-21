'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import getUnReadMessageCount from '@/app/actions/getUnreadMessageCount';


// create context
const GlobalContext = createContext();

// create Provider

export function GlobalProvider({ children }) {
    const [ unreadCount, setUnreadCount ] = useState(0);

    const {data: session} = useSession();

    useEffect(() => {
        if (session && session.user){
            getUnReadMessageCount().then((res) => {
                if(res.count) setUnreadCount(res.count);
            })
        }
    }, [getUnReadMessageCount, session]);

    return (
        <GlobalContext.Provider value={{
            unreadCount,
            setUnreadCount
        }}>
            { children }

        </GlobalContext.Provider>
    );

}

export function useGlobalContext() {
    return useContext(GlobalContext);
}