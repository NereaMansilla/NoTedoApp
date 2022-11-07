import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export const userCall = createAsyncThunk(
  'users/axiosUser', async (input) =>{
  try{

    const response =  await axios.post('http://localhost:3001/user/singin', input,{
      headers:{
        'content-type': 'application/json; charset=utf-8'
      }
    } )
  console.log(response.data)
}
  catch(err){
    console.log(err)
  }
}
)
export const user = createSlice({
  name: 'users',
  initialState: {},

  reducers: {
    logginUser: (state, action) => {
      /* const data = axios.post('http://localhost:3000/user/singin',) */
      console.log(action.payload)
    }
  }
})

export default user.reducer


export const { logginUser } = user.actions