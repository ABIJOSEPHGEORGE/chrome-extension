import { configureStore, combineReducers } from "@reduxjs/toolkit";
import chatSlice from './slice';

const rootReducer = combineReducers({
    chatSlice
})

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: {
        chatSlice
    }
})

export default store;