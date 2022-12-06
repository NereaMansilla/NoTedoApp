import { createSlice,  createAsyncThunk  } from '@reduxjs/toolkit'
 import axios from 'axios';
 

 export const newProjectCall = createAsyncThunk('newProject/projectCall', async (project)=>{

    try{
       const response = await axios.post('http://localhost:3001/project', {
          name: project.projectData.name,
          description: project.projectData.description,
          userID: project.id
         })
         console.log('response', response)
         console.log('data', project)

    return response.data
   }
   catch(error){
   console.log(error)
   }

 })


const createProject= createSlice({
 name: 'newProject',
 initialState:{
    modal: false,
    modal2:false,
    seeTasks: false
 },
 reducers:{
    setModal: (state, action)=>{
       state.modal = action.payload
    },
    setModal2: (state,action)=>{
      state.modal2 = action.payload
    },
    setModal3: (state,action)=>{
      state.seeTasks = action.payload
    }
 },

 extraReducers:{
   [newProjectCall.fulfilled]: (state, {payload}) =>{
    state.newProject = payload
   }
 }

})


export default createProject.reducer
export const {setModal} = createProject.actions
export const {setModal2} = createProject.actions
export const {setModal3} = createProject.actions