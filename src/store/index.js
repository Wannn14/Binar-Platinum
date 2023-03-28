import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./actions/actions-slice";
import crudSlice from "./actions/crud-slice";
import dashboardSlice from "./actions/dashboard-slice";
import tableSlice from "./actions/table-slice";
import signupSlice from "./actions/register-slice";
import addSlice from "./actions/add-slice";



export const Store = configureStore({
    reducer:{
        authStore: authSlice.reducer,
        regStore : signupSlice.reducer,
        dashboardStore : dashboardSlice.reducer,
        tableStore : tableSlice.reducer,
        viewStore : crudSlice.reducer,
        addStore :addSlice.reducer,
        
    }
})