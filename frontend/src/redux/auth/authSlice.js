import { createSlice } from "@reduxjs/toolkit";

const state = {
    isLogged: undefined,
}
const authSlice = createSlice({
    name: 'auth',
    initialState: state,
    reducers: {
        setLogin: (state, action) => {
            state.isLogged = action.payload
        }
    }
})

export default authSlice.reducer;
export const { setLogin } = authSlice.actions;