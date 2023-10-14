import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    user: {},
    loading: 'idle',
    error: null
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUsers(state, action) {
            state.user = action.payload
        }
    }
})

export const {getUsers} = userSlice.actions

export default userSlice.reducer