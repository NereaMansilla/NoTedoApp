import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const createTask = createAsyncThunk('task/sendTask', async(task)=>{

    try {
        const response = await axios.post('http://localhost:3001/task',{
        name: task.name,
        projectID : task.id
      })
    
      console.log('respuesta taks', response.data)
     
    } catch (error) {
        console.log(error)
    }
 
})
    

const getTasks = createSlice({
    name: 'task',
    initialState: {
        tasks: []
    },
    reducers:{
        getTask: (state,action)=>{
            state.tasks = action.payload
        }
    },
    extraReducers:{
        [createTask.fulfilled]: (state, {payload}) =>{
            console.log('pay', payload)
            state.tasks = [...state.tasks, payload]
        }
    }
})


export default getTasks.reducer

export const {getTask} = getTasks.actions