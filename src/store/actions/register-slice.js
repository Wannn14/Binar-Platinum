import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {isReg: !! localStorage.getItem('role')}

const signupCustomer= createAsyncThunk('auth/sign',async(payload)=>{
    try{
        const getApi = await axios.post ('https://bootcamp-rent-cars.herokuapp.com/customer/auth/register',payload) 

        return getApi.data
    }
    catch(error){
        console.log(error);
    }
})



const signupSlice= createSlice({
    name:"signupCustomer",
    initialState,
    reducers:{
        signup(state,action){
            state.isReg = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(signupCustomer.fulfilled,(state,action)=>{
            localStorage.setItem('role', action.payload)
            signupSlice.caseReducers.signup(state,{
                payload: !! action.payload,
                type: signupCustomer.typePrefix
            })
        })
    }
})
export const {signup} = signupSlice.actions
export {signupCustomer}
export default signupSlice
