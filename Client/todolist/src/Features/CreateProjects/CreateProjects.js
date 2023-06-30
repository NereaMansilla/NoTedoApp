import { createSlice,  createAsyncThunk  } from '@reduxjs/toolkit'
 import axios from 'axios';
 




const createProject= createSlice({
 name: 'newProject',
 initialState:{
    modal: false,
    modal2:false,
    seeTasks: false,
    modalEdit:false,
    idProject: ""
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
    },
    setModalEdit: (state, action) =>{
      state.modalEdit = action.payload
    },
    getIdProject: (state,action)=>{
      state.idProject = action.payload
    }
 },

 extraReducers:{

 }

})


export default createProject.reducer
export const {setModal} = createProject.actions
export const {setModal2} = createProject.actions
export const {setModal3} = createProject.actions
export const {setModalEdit} = createProject.actions
export const {getIdProject} = createProject.actions