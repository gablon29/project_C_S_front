import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    useradmin: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.useradmin = action.payload
        },
    }
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer