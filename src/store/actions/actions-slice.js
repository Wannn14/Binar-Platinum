import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {isAuth: !! localStorage.getItem('acces_token')}

const loginCustomer= createAsyncThunk('auth/login',async(payload)=>{
    try{
        const getApi = await axios.post ('https://bootcamp-rent-cars.herokuapp.com/customer/auth/login',payload) 

        return getApi.data.access_token
    }
    catch(error){
        console.log(error);
    }
})

const signupCustomer= createAsyncThunk('auth/sign',async(payload)=>{
    try{
        const getApi = await axios.post ('https://bootcamp-rent-cars.herokuapp.com/customer/auth/register',payload) 

        return getApi.data
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
            localStorage.removeItem('access_token')
            state.isAuth = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginCustomer.fulfilled,(state,action)=>{
            localStorage.setItem('access_token', action.payload)
            authSlice.caseReducers.login(state,{
                payload: !! action.payload,
                type: loginCustomer.typePrefix
            })
        })
    }
})

const signupSlice= createSlice({
    name:"signupCustomer",
    initialState,
    reducers:{
        signup(state,action){
            state.isAuth = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(signupCustomer.fulfilled,(state,action)=>{
            signupSlice.caseReducers.signup(state,{
                payload: !! action.payload,
                type: signupCustomer.typePrefix
            })
        })
    }
})
export const {login,logout} = authSlice.actions
export const {signup} = signupSlice.actions
export {loginCustomer,signupCustomer}
export default authSlice
