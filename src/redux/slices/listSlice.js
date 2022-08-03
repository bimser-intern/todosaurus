import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name : 'list',
    initialState : {
        items : [],
    },
    reducers : {

    }
});

export default listSlice.reducer;