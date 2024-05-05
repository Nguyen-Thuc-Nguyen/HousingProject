import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../data/database/user";
import { Products } from "../data/database/product";
import { sale } from "../data/database/sale"

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        currentAccount: {},
        user: UserData,
        order: sale,
        product: Products,
        shoppingCart: [],
    },
    reducers: {
        logout: state => {
            state.isAuthenticated = false;
            state.currentAccount = {}
        },
        loginSuccess: (state, action) => {
            state.currentAccount = action.payload
            state.isAuthenticated = true;
        },
        loginFailure: state => {
            state.isAuthenticated = false;
        },
        addUser: (state, action) => {
            state.user.push(action.payload);
        },
        addProduct: (state, action) => {
            state.product.push(action.payload);
        },
        deleteProduct: (state, action) => {
            state.product = state.product.filter(product => product.id !== action.payload);
        },
        updateProduct: (state, action) => {
            const index = state.product.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.product[index] = action.payload;
            }
        },
        addToCarts: (state, action) => {
            state.shoppingCart.push(action.payload);
        },
        removeAllInCart: (state, action) => {
            state.shoppingCart = [];
        },
        updateWholeCart: (state, action) => {
            state.shoppingCart = action.payload;
        },
        addOrder: (state, action) => {
            action.payload.forEach(element => {
                state.order.push(element)
            });
        },
        completeOrder: (state, action) => {
            state.order.forEach(element => {
                element.status = "complete"
            });
        },
    },
})


export const {
    logout
    , loginSuccess
    , loginFailure
    , addUser, addProduct
    , updateProduct
    , deleteProduct
    , addToCarts
    , removeAllInCart
    , updateWholeCart
    , updateCart
    , addOrder
    , completeOrder
} = authSlice.actions;
export default authSlice.reducer;