import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
    cruddata:{
        cars:[]
    }
}
const datacrud = createAsyncThunk ('data/crud',async(payload)=>{
const token = localStorage.getItem ('access_token')
const config = {
    headers:{
        access_token: token
    }
   
}
try{
    const getApi = await axios.get ('https://bootcamp-rent-cars.herokuapp.com/admin/v2/car',config)
    // console.log(getApi.data);
    return getApi.data
    
}
catch(error){
    console.log(error);
    throw error;
}
})
const crudSlice= createSlice({
    name:"dataCar",
    initialState,
    reducers:{
        viewcar(state,action){
            state.cruddata = action.payload
            
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(datacrud.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.cruddata = action.payload
            
        })
        builder.addCase(datacrud.rejected,(state,action)=>{
            crudSlice.caseReducers.setDashboard(state,action)
        })
    },
})

export const {viewcar} = crudSlice.actions
export {datacrud}
export default crudSlice