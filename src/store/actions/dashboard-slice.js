import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import  axios from 'axios'

const initialState = {dashboardData:[]}
const dataDashboard= createAsyncThunk('data/dashboard',async(payload)=>{
    const token = localStorage.getItem ('access_token')
    const config = {
        headers:{
            access_token: token
        },
        params:{
            from:payload.from,
            until:payload.until
        }
    }
    try{
        const getApi = await axios.get ('https://bootcamp-rent-cars.herokuapp.com/admin/order/reports',config)
        // console.log(getApi.data);
        return getApi.data
        
    }
    catch(error){
        console.log(error);
        throw error;
    }
})

const dashboardSlice= createSlice({
    name:"dataDashboard",
    initialState,
    reducers:{
        setDashboard(state,action){
            state.dashboardData = action.payload
            
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(dataDashboard.fulfilled,(state,action)=>{
            // console.log(action);
            // dashboardSlice.caseReducers.setDashboard(state,action)
            state.dashboardData = action.payload
        })
        builder.addCase(dataDashboard.rejected,(state,action)=>{
            dashboardSlice.caseReducers.setDashboard(state,{
                payload: false,
                type: dataDashboard.typePrefix
            })
        })
    }
})
export const {dashboard} = dashboardSlice.actions
export {dataDashboard}
export default dashboardSlice