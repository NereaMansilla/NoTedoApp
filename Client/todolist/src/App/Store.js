import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../Features/Users/UsersSlice.js'

export const store = configureStore({
 reducer:{
    users: userReducer
}
})

