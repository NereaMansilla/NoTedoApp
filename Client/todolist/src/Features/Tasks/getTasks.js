import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export const getTasksProject = createAsyncThunk('task/getTask', async(projectId)=>{
 
    try {
        const tasks = await axios.get(`https://notedo.onrender.com/task/${projectId}`)
       
        return tasks.data
    } catch (error) {
        console.log(error)
    }
})


export const createTask = createAsyncThunk('task/sendTask', async(task)=>{

    try {
        const response = await axios.post('https://notedo.onrender.com/task',{
        name: task.task,
        projectID : task.id,
        done:false
      })
     
      return response.data
     
    } catch (error) {
        console.log(error)
    }
 
})


export const deleteTask = createAsyncThunk('task/delete', async(id)=>{
    try {
        const taskdelete = await axios.delete(`https://notedo.onrender.com/task/${id}`)
       
    } catch (error) {
        console.log(error)
    }
})


export const updateTask = createAsyncThunk('task/update', async(task)=>{
    
    try {
        const update = await axios.put(`https://notedo.onrender.com/task/${task.id}`,{
            name: task.ChangeTask,
            
        })
        return update.data
       
    } catch (error) {
        console.log(error)
    }
})


export const doneTask = createAsyncThunk('task/postDone', async(task)=>{
    try {
        const respondeDoneTask = await axios.put(`https://notedo.onrender.com/task`,{
            id:task.id
        })
        console.log(respondeDoneTask.data)
        return respondeDoneTask.data
    } catch (error) {
        console.log(error)
    }
})
    

const getTasks = createSlice({
    name: 'task',
    initialState: {
        tasks: [],
        tasksProject: [],
       check:false,
       taskModal:false,
       loadingCreate: false,
       idCreate: "",
       loadingTask: false
    },
    reducers:{
   
        openTaskModal:(state, action)=>{
            state.taskModal = action.payload
        },
        deleteTaskArr: (state,action) =>{
            state.tasksProject = state.tasksProject.filter((tasks)=> tasks.id !== action.payload)
        },
         doneTaskId:(state, {payload})=>{
          
        } 
    },
    extraReducers:{
        [createTask.pending]: (state, {payload})=>{
         state.loadingCreate= true
         
        },
        [createTask.fulfilled]: (state, {payload}) =>{
            state.tasksProject = [...state.tasksProject, payload]
            state.loadingCreate = false
            
        }, 
        [getTasksProject.pending]: (state, {payload})=>{
            state.loadingTask = true
        },
        [getTasksProject.fulfilled] : (state, {payload}) => {
            state.tasksProject = [...payload]
            state.loadingTask = false
            
        },
        [updateTask.pending]: (state, {payload})=>{
            state.loadingTask = true
        },

        [updateTask.fulfilled]: (state, {payload})=>{
            const index = state.tasksProject.findIndex((arr)=>{
                return arr.id === payload.id
            })
            state.tasksProject[index] = payload
            state.loadingTask = true
        },
        [doneTask.fulfilled]: (state, {payload}) =>{
            const index = state.tasksProject.findIndex((arr)=>{
                return arr.id === payload.id
            })
            state.tasksProject[index].done = payload.done 
            
        }
     
    }
})


export default getTasks.reducer

export const {getTask} = getTasks.actions
export const {idTaskDelete} = getTasks.actions
export const {changeCheck} = getTasks.actions
export const {openTaskModal} = getTasks.actions
export const {deleteTaskArr} = getTasks.actions
export const {doneTaskId} = getTasks.actions