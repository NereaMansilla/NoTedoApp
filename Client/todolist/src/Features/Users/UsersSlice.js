import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export const userCall = createAsyncThunk(
  'users/axiosUser', async (input) =>{
  try{

    const response = await axios.post('http://localhost:3001/user/singin', {
      
      password: input.password,
      email: input.email
     } )
    
    return response.data
    }
    catch(err){
    console.log(err)
  }
}
)







export const user = createSlice({
  name: 'users',
  initialState:{
    users:{},
    loading: false,
    error: false
  },

  reducers: {
    
  },
  extraReducers: {
    [userCall.pending]: (state, {payload})=>{
     state.loading = true
    },
    [userCall.fulfilled]: (state, {payload})=>{
    state.users= payload

    },
    [userCall.rejected]: (state, {payload})=>{
      state.error = true
    },
  }
})

 export const {setErrorTrue} = user.actions  
export default user.reducer


