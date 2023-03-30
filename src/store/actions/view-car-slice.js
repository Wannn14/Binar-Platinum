import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import  axios from 'axios'

const initialState = {
    CarData: {
        cars: []
    }
}
const getCarsData= createAsyncThunk('data/cars',async(payload)=>{
    const token = localStorage.getItem ('access_token')
    const config = {
        headers:{
            access_token: token
        },
        params:{
            category:payload.cars
        
        }
    }
    try{
        console.log('hadir bos');
        const getApi = await axios.get ('https://bootcamp-rent-cars.herokuapp.com/admin/v2/car',config)
        // console.log(getApi.data);
        return getApi.data
        
    }
    catch(error){
        console.log(error);
        throw error;
    }
})

const deleteCarData= createAsyncThunk('delete/cars',async(payload)=>{
    const token = localStorage.getItem ('access_token')
    const config = {
        headers:{
            access_token: token
        }
    }
    try{
      await axios.delete (`https://bootcamp-rent-cars.herokuapp.com/admin/car/${payload.id}`,config)
        // console.log(getApi.data);
    }
    catch(error){
        console.log(error);
        throw error;
    }
})

const viewcarSlice= createSlice({
    name:"dataCar",
    initialState,
    reducers:{
        setCar(state,action){
            state.CarData = action.payload
            
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(getCarsData.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.CarData = action.payload
            
        })
        builder.addCase(deleteCarData.fulfilled,(state,action)=>{
          console.log(action);  
        })
        // builder.addCase(getCarsData.rejected,(state,action)=>{
        //     // viewcarSlice.caseReducers.setCar(state,action)

        // })
    },
})
export {getCarsData,deleteCarData}
export default viewcarSlice