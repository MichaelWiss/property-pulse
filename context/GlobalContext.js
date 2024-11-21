'use client';
import { createContext, useContext, useState } from 'react';

// create context
const GlobalContext = createContext();

// create Provider

export function GlobalProvider({ children }) {
    const [ unreadCount, setUnreadCount ] = useState(11);

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