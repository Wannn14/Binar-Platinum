import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./actions/actions-slice";

export const Store = configureStore({
    reducer:{
        authStore: authSlice.reducer
    }
})