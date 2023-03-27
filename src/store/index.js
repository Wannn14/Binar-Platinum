import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./actions/actions-slice";
import crudSlice from "./actions/crud-slice";
import dashboardSlice from "./actions/dashboard-slice";
import signupSlice from "./actions/register-slice";



export const Store = configureStore({
    reducer:{
        authStore: authSlice.reducer,
        regStore : signupSlice.reducer,
        dashboardStore : dashboardSlice.reducer,
        viewStore : crudSlice.reducer
        
    }
})