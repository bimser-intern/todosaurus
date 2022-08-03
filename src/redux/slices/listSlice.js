import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name : 'list',
    initialState : {
        items : [],
    },
    reducers : {
        addDuty : (state, action) => {
            state.items.push(action.payload)
        }
    }
});

export const {addDuty} = listSlice.actions;
export default listSlice.reducer;