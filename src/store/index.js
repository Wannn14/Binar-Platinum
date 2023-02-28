import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./actions/actions-slice";
import signupSlice from "./actions/register-slice";

export const Store = configureStore({
    reducer:{
        authStore: authSlice.reducer,
        regStore : signupSlice.reducer
        
    }
})