import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {isAuth: !! localStorage.getItem('access_token')}
const loginAdmin= createAsyncThunk('auth/login',async(payload)=>{
    try{
        const getApi = await axios.post ('https://bootcamp-rent-cars.herokuapp.com/admin/auth/login',payload) 

        return getApi.data
    }
    catch(error){
        console.log(error);
        throw error;
    }
})

const authAdminSlice= createSlice({
    name:"authAdminLogin",
    initialState,
    reducers:{
        login(state,action){
            state.isAuth = action.payload

        },
        logout (state,action){
            localStorage.removeItem('access_token')
            localStorage.removeItem('role')
            state.isAuth = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginAdmin.fulfilled,(state,action)=>{
            localStorage.setItem('access_token', action.payload.access_token)
            localStorage.setItem('role', action.payload.role)
            authAdminSlice.caseReducers.login(state,{
                payload: !! action.payload,
                type: loginAdmin.typePrefix
            })
        });
        builder.addCase(loginAdmin.rejected,(state,action)=>{
            authAdminSlice.caseReducers.login(state,{
                payload: false,
                type: loginAdmin.typePrefix
            })
        })
    }
})

export const {login,logout} = authAdminSlice.actions
export {loginAdmin}
export default authAdminSlice