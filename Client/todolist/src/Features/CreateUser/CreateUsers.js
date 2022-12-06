import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'



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



export const createUser = createSlice({
    name: 'newUser',
    initialState:{
        newUser:{},
        error:{},
        loading: false
    },
    reducers:{

    },
    extraReducers:{
    [createUserCall.pending]: (state, {payload})=>{
     state.loading = true
    },
    [createUserCall.fulfilled]: (state, {payload})=>{
        state.loading = false
        state.newUser = payload
    },
    [createUserCall.rejected]: (state, {payload})=>{
        state.error = payload
    }
    }
})


export default createUser.reducer