import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export const createTask = createAsyncThunk('task/sendTask', async(task)=>{

    try {
        const response = await axios.post('http://localhost:3001/task',{
        name: task.task,
        projectID : task.id,
        done:false
      })
      console.log('data del create',response.data)
      return response.data
     
    } catch (error) {
        console.log(error)
    }
 
})


export const deleteTask = createAsyncThunk('task/delete', async(id)=>{
    try {
        const taskdelete = await axios.delete(`http://localhost:3001/task/${id}`)
       console.log(taskdelete.data)
    } catch (error) {
        console.log(error)
    }
})


export const updateTask = createAsyncThunk('task/update', async(task)=>{
    
    try {
        const update = await axios.put(`http://localhost:3001/task/${task.id}`,{
            name: task.ChangeTask
        })
        console.log('respuesta del update', update)
    } catch (error) {
        console.log(error)
    }
})
    

const getTasks = createSlice({
    name: 'task',
    initialState: {
        tasks: [],
       check:false,
       taskModal:false
    },
    reducers:{
      /*   getTask: (state,action)=>{
            state.tasks = action.payload
        }, 
        idTaskDelete: (state,action) =>{
            state.tasks.tasks = state.tasks.tasks.filter((c)=> c.id !== action.payload)
        }, 
        changeCheck: (state,action)=>{
            state.check = action.payload
        }, */
        openTaskModal:(state, action)=>{
            state.taskModal = action.payload
        }
    },
    extraReducers:{
        [createTask.fulfilled]: (state, {payload}) =>{
            
            state.tasks = [...state.tasks, payload]
            console.log(state.tasks)
        }, 
      /*   [taskdelete.fulfilled]: (state, {payload})=>{
            state.tasks.tasks = [...state.tasks.tasks, paylo]
        } */
    }
})


export default getTasks.reducer

export const {getTask} = getTasks.actions
export const {idTaskDelete} = getTasks.actions
export const {changeCheck} = getTasks.actions
export const {openTaskModal} = getTasks.actions