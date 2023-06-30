import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../Features/Users/UsersSlice.js'
import projectsReducer from '../Features/getProjects/getProjects.js'
import newProjectReducer from '../Features/CreateProjects/CreateProjects.js'
import tasksReducer from '../Features/Tasks/getTasks.js'

export const store = configureStore({
 reducer:{
    users: userReducer,
    projects: projectsReducer,
    newProject: newProjectReducer,
    tasks: tasksReducer
}
})

