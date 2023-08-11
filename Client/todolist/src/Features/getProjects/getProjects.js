import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getProjects = createAsyncThunk('userProjects/projectCall', async(data) =>{
    
try {
    const response = await axios.get(`https://notedo.onrender.com/project/${data.id}`,{
       
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

    const response2 = await axios.post('https://notedo.onrender.com/project',{
        name: project.projectData.name,
        description: project.projectData.description,
        userID: project.id
    },
    {
        headers:{
            authorization: 'Bearer ' + project.token
        }

    }
    )

    return response2.data
    }
    catch (error){
     console.log(error)
    }
})


export const deleteProject= createAsyncThunk('userProjects/delete', async(data)=>{
    try{
        const response3 = await axios.delete(`https://notedo.onrender.com/project/${data.project.userID}/${data.project.id}`,{
            headers:{
                authorization: 'Bearer ' + data.token
            }
        })

return response3.data

}
catch(error){
    console.log(error)
}


})


export const getProjectsById = createAsyncThunk('userProjects/projectId', async(project) =>{

    try{

    const response4 = await axios.get(`https://notedo.onrender.com/project/${project.idUser}/${project.id}`,
  {
    headers:{
        authorization: 'Bearer ' + project.token
    }
  })
 
    return response4.data
    }
    catch (error){
     console.log(error)
    }
})




export const updateProject = createAsyncThunk('userProjects/projectUpdate', async(project)=>{
    try {
        const response5 = await axios.put(`https://notedo.onrender.com/project/${project.idUser}/${project.id}`,{
         name:project.projectState.name,
         description:project.projectState.description
    },
         {
            headers:{
                authorization: 'Bearer ' + project.token
            }
         })
        return response5.data
    } catch (error) {
        console.log(error)
    }
})


 

const projects = createSlice({
    name: 'userProjects',
    initialState:{
        projects:[], 
        loadingProjects: false,
        newProject: [],
        projectById:"",
        projectAndTask: "",
        loadingProjectId: false
       
    },
    reducers:{
    clearProjectState: (state,payload)=>{
        state.projects = []
    }
        },
    
    extraReducers:{
        [getProjects.pending]: (state, {payload})=>{
            state.loadingProjects = true
        },
     [getProjects.fulfilled]: (state, {payload})=>{
         state.projects = payload
         state.loadingProjects = false
     },
     [createProject.fulfilled]: (state,  {payload})=>{
      state.projects = [...state.projects, payload]
     },
     [deleteProject.fulfilled]: (state, {payload})=>{
       state.projects = payload
     },
     [getProjectsById.pending]: (state, {payload})=>{
        state.loadingProjectId = true
     },
     [getProjectsById.fulfilled]: (state,{payload})=>{
         localStorage.setItem("projectById", JSON.stringify(payload));
         
        state.projectById = payload
        
        state.loadingProjectId = false
     },
     [updateProject.fulfilled]: (state,{payload})=>{
        const index = state.projects.findIndex((arr)=>{
            return arr.id === payload.id
        })
        state.projects[index] = payload
      
     },
    

    }
})

export default projects.reducer
export const {clearProjectState} = projects.actions

