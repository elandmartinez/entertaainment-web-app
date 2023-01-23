import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { store as appState } from "../store/index.js";
import { PersistGate } from 'redux-persist/integration/react';
import { persistedStore } from '../store/index.js';
import { getStoredState } from "redux-persist";
import { persistConfig } from '../utils/constants';
import { useEffect, useRef } from "react";

const Root = () => {
    let storedState = useRef(null);
    useEffect(() => {
        async function getPersistedState(persistConfiguration) {
            storedState.current = await getStoredState(persistConfiguration);
            console.log(storedState.current);
        }
        getPersistedState(persistConfig);
    }, []);
    console.log(storedState);
    while (storedState.current === null) return null

    return (
        <Router>
            <Provider store={appState}>
                <PersistGate loading={null} persistor={persistedStore}>
                    <App />
                </PersistGate>
            </Provider>
        </Router>
    )
}

export default Root;