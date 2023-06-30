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



export const createUserCall = createAsyncThunk(
  'newUser/createUserCall', async (input) =>{
      try {
      const response = await axios.post('http://localhost:3001/user/register',{
          name:input.name,
          password: input.password,
          email: input.email
  
      })
      return response.data
  } catch (error) {
          console.log(error)
      }
  }
  
  )






export const user = createSlice({
  name: 'users',
  initialState:{
    users:{},
    loading: false,
    error: false,
    newUsers:{}
  },

  reducers: {
    
  },
  extraReducers: {
    [userCall.pending]: (state, {payload})=>{
     state.loading = true
    },
    [userCall.fulfilled]: (state, {payload})=>{
      localStorage.setItem("id", payload.user.id);
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user", payload.user.name);
    state.users= payload

    },
    [userCall.rejected]: (state, {payload})=>{
      state.error = true
    },
    [createUserCall.fulfilled]: (state, {payload})=>{
      state.users = payload
    
      state.newUsers = payload
    }
  }
})

 export const {setErrorTrue} = user.actions  
export default user.reducer


