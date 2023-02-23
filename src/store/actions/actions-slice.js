import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {isAuth:false}

const loginCustomer= createAsyncThunk('auth/login',async(payload)=>{
    try{
        const getApi = await axios.post ('https://bootcamp-rent-cars.herokuapp.com/customer/auth/login',payload) 

        return getApi.data.access_token
    }
    catch(error){
        console.log(error);
    }
})
const authSlice= createSlice({
    name:"authLogin",
    initialState,
    reducers:{
        login(state,action){
            state.isAuth = action.payload
        },
        logout (state,action){
            state.isAuth = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginCustomer.fulfilled,(state,action)=>{
            authSlice.caseReducers.login(state,{
                payload: !! action.payload,
                type: loginCustomer.typePrefix
            })
        })
    }
})
export const {login,logout} = authSlice.actions
export {loginCustomer}
export default authSlice
