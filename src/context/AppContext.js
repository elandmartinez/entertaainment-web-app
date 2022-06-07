import { createContext, useContext } from "react";
import useAppState from "../hooks/useAppState.js";

const AppContext = createContext({});

export const AppProvider = (props) => {
    const initialState = useAppState();

    return (
        <AppContext.Provider value={initialState}>
            {props.children}
        </AppContext.Provider>
    )
}

export function useAppProvider () {
    const context = useContext(AppContext);

    if(!context) throw new Error("useAppProvider() should be used inside AppContext");

    return context
}
