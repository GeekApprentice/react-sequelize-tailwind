import { configureStore } from "@reduxjs/toolkit"
import propertyReducer from './reducers/properties'
import userReducer from './reducers/users'


const store = configureStore ({
    reducer: {
        properties: propertyReducer,
        user: userReducer
    }
})

export default store