import { createSlice } from "@reduxjs/toolkit";
import { getProperties } from "../api";

let initialState = {
    properties: [],
    loading: 'idle',
    error: null
}

const propertySlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
        getAllProp(state, action) {
            state.properties = action.payload
        }
    }
})

export const {getAllProp} = propertySlice.actions

export const getAllProps = () => {
    return async dispatch => {
        const data = await getProperties()
        dispatch(getAllProp(data))
    }
}

export default propertySlice.reducer



