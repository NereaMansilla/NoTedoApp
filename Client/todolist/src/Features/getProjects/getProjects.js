import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getProjects = createAsyncThunk('userProjects/projectCall', async(data) =>{
    console.log('data', data)
try {
    const response = await axios.get(`http://localhost:3001/project/${data.id}`,{
       
        headers:{

            authorization: 'Bearer ' + data.token
            
            
        }
    })
    return response.data
} catch (error) {
    console.log(error)
}

})


export const createProject = createAsyncThunk('userProjects/newProject', async(project) =>{

    try{

    const response2 = await axios.post('http://localhost:3001/project',{
        name: project.projectData.name,
        description: project.projectData.description,
        userID: project.id
    })

    return response2.data
    }
    catch (error){
     console.log(error)
    }
})


export const deleteProject= createAsyncThunk('userProjects/delete', async(data)=>{

    try{
        const response3 = await axios.delete(`http://localhost:3001/project/${data.userID}/${data.id}`)

return response3.data

}
catch(error){
    console.log(error)
}


})


const projects = createSlice({
    name: 'userProjects',
    initialState:{
        projects:[], 
        loading: false,
        newProject: [],
       
    },
    reducers:{

        },
    
    extraReducers:{
        [getProjects.pending]: (state, {payload})=>{
            state.loading = true
        },
     [getProjects.fulfilled]: (state, {payload})=>{
         state.projects = payload
        state.loading = false
     },
     [createProject.fulfilled]: (state,  {payload})=>{
      state.projects = [...state.projects, payload]
     },
     [deleteProject.fulfilled]: (state, {payload})=>{
       state.projects = payload
     }
    }
})

export default projects.reducer

