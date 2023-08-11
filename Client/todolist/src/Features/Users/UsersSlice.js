import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export const userCall = createAsyncThunk(
  'users/axiosUser', async (input) =>{
  
  try{

    const response = await axios.post('https://notedo.onrender.com/user/singin', {
      
      password: input.password,
      email: input.email
     } )
    console.log('response del singin', response.data)
    return response.data
    }
    catch(err){
    return err
   
  }
}
)



export const createUserCall = createAsyncThunk(
  'newUser/createUserCall', async (input) =>{
      try {
      const response = await axios.post('https://notedo.onrender.com/user/register',{
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


export const deleteUser = createAsyncThunk('user/delete',async(user)=>{

  try {
    const responseDelete = await axios.delete(`https://notedo.onrender.com/user/delete`,{
      email: user.email
    })
    console.log(responseDelete)

  } catch (error) {
    console.log(error)
  }

})

export const recoverPassword = createAsyncThunk('user/password',async(email)=>{
  
  try {
    const verfiyUser = await axios.post("https://notedo.onrender.com/user/verify",{
      email
    })
    return verfiyUser.data
  } catch (error) {
    console.log(error)
  }
})


export const user = createSlice({
  name: 'users',
  initialState:{
    users:'',
    loading: false,
    error: false,
    newUsers:{},
    recover: "",
    loadingVerify: false
  },

  reducers: {
    clearUserState: (state,action)=>{
      state.users = {}
    },
    clearRecover: (state,action) =>{
      state.recover = ""
    }
    
  },
  extraReducers: {
    [userCall.pending]: (state, {payload})=>{
     state.loading = true
    },
    [userCall.fulfilled]: (state, {payload})=>{
      state.users= payload
      state.loading = false
      if(payload !== false){
        localStorage.setItem("id", payload.user.id);
        localStorage.setItem("token", payload.token);
        localStorage.setItem("user", payload.user.name);
        localStorage.setItem("email", payload.user.email); 

      }

    },
    [userCall.rejected]: (state, {payload})=>{
      state.error = true
    },
    [createUserCall.fulfilled]: (state, {payload})=>{
      state.users = payload
      state.newUsers = payload
      localStorage.setItem("token", payload.token);
      localStorage.setItem("id", payload.user.id);
      localStorage.setItem("user", payload.user.name);
    },
    [recoverPassword.pending]: (state, {payload}) =>{

      state.loadingVerify = true
      },
    [recoverPassword.fulfilled]: (state, {payload}) =>{

    state.recover = payload
    state.loadingVerify = false
    }
  }
})

 export const {setErrorTrue} = user.actions  
export default user.reducer
export const {clearUserState} = user.actions
export const {clearRecover} = user.actions


