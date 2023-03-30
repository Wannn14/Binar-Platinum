import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {isAuthAdmin: !! localStorage.getItem('access_token')}
const addData= createAsyncThunk('add/car',async(payload)=>{
    const token = localStorage.getItem ('access_token')
    const config = {
        headers:{
            access_token: token
        }
    }
    try{
        const formData = new FormData ();
        formData.append("name",payload.name)
        formData.append("category", payload.category)
        formData.append("price",payload.price)
        formData.append("status",payload.status)
        formData.append("image", payload.image)
        const getApi = await axios.post ('https://bootcamp-rent-cars.herokuapp.com/admin/car',formData,config) 

        return getApi.data
    }
    catch(error){
        console.log(error);
        throw error;
    }
})

const addSlice= createSlice({
    name:"addcarSlice",
    initialState,
    reducers:{
        addCars(state,action){
            state.isAuthAdmin = action.payload

        }
    },
    extraReducers:(builder)=>{
        builder.addCase(addData.fulfilled,(state,action)=>{
            addSlice.caseReducers.addCars(state,{
                payload: !! action.payload,
                type: addData.typePrefix
            })
        });
        builder.addCase(addData.rejected,(state,action)=>{
            addSlice.caseReducers.addCars(state,{
                payload: false,
                type: addData.typePrefix
            })
        })
    }
})

export const {addCars} = addSlice.actions
export {addData}
export default addSlice