import { createSlice } from "@reduxjs/toolkit";


const initialStateValue = ""

 export const themesSlice = createSlice({
    name: 'theme',
    initialState: { value: initialStateValue },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload
        },
    }
 })

 export const {changeColor} = themesSlice.actions

export default themesSlice.reducer;