import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import experienceReducer from "./experienceSlice";
import servicesReducer from "./servicesSlice"
import portfolioSlice from "./portfolioSlice";


export const store = configureStore({
    reducer: {
        experience: experienceReducer,
        services: servicesReducer,
        portfolio: portfolioSlice,
    },
    middleware: getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch