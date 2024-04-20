import { createAction, createSlice } from "@reduxjs/toolkit";

export const loadUserData = createAction('auth/loadUserData');



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: [],
        order: [],
        product: [],
    },
    reducers: {
        logout: state => {
            state.isAuthenticated = false;
        },
        loginSuccess: state => {
            state.isAuthenticated = true;
        },
        loginFailure: state => {
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadUserData, (state, action) => {
                state.user = action.payload;
            });
    }
})


export const { logout, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;