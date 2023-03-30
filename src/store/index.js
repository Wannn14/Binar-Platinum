import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./actions/actions-slice";
import dashboardSlice from "./actions/dashboard-slice";
import tableSlice from "./actions/table-slice";
import signupSlice from "./actions/register-slice";
import addSlice from "./actions/add-slice";
import viewcarSlice from "./actions/view-car-slice";
import authAdminSlice from "./actions/admin-auth-slice"
import editSlice from "./actions/edit-slice";



export const Store = configureStore({
    reducer:{
        authStore: authSlice.reducer,
        authAdminStore: authAdminSlice.reducer,
        regStore : signupSlice.reducer,
        dashboardStore : dashboardSlice.reducer,
        tableStore : tableSlice.reducer,
        addStore :addSlice.reducer,
        viewcarStore :viewcarSlice.reducer,
        editcarStore : editSlice.reducer
        
    }
})