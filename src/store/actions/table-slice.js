import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import  axios from 'axios'

const initialState = {
    tableData: {
        orders: []
    }
}
const dataTable= createAsyncThunk('data/tabel',async(payload)=>{
    const token = localStorage.getItem ('access_token')
    const config = {
        headers:{
            access_token: token
        },
        params:{
            pageSize:payload.pagesize,
            page:payload.page
        
        }
    }
    try{
        const getApi = await axios.get ('https://bootcamp-rent-cars.herokuapp.com/admin/v2/order',config)
        // console.log(getApi.data);
        return getApi.data
        
    }
    catch(error){
        console.log(error);
        throw error;
    }
})

const tableSlice= createSlice({
    name:"dataTable",
    initialState,
    reducers:{
        setTable(state,action){
            state.tableData = action.payload
            
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(dataTable.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.tableData = action.payload
            
        })
        builder.addCase(dataTable.rejected,(state,action)=>{
            tableSlice.caseReducers.setDashboard(state,action)
        })
    },
})
export const {setTable} = tableSlice.actions
export {dataTable}
export default tableSlice