import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const initialState ={
    EditCarData: {
        EditCars: []
    }
}
const getEditData= createAsyncThunk('editdata/cars',async(payload)=>{
    const token = localStorage.getItem ('access_token')
    const config = {
        headers:{
            access_token: token
        }
        
    }
    try{
        const getApi = await axios.get (`https://bootcamp-rent-cars.herokuapp.com/admin/car/${payload.id}`,config)
        // console.log(getApi.data);
        return getApi.data

        
    }
    catch(error){
        console.log(error);
        throw error;
    }
})

const editData= createAsyncThunk('edit/cars',async(payload)=>{
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
        const getApi = await axios.put (`https://bootcamp-rent-cars.herokuapp.com/admin/car/${payload.id}`,formData,config)
        // console.log(getApi.data);
        return getApi.data

        
    }
    catch(error){
        console.log(error);
        throw error;
    }
})


const editSlice = createSlice({
    name: 'editCar',
    initialState,
    reducers: {
        setEditCar(state,action){
            state.EditCarData = action.payload
            
        },
        setEdit(state,action){
            state.EditCarData = action.payload
            
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getEditData.fulfilled,(state,action)=>{
            state.EditCarData = action.payload
            
        })
        builder.addCase(editData.fulfilled,(state,action)=>{
            state.EditCarData = action.payload
            
        })
    },
});
export {getEditData,editData}
export default editSlice