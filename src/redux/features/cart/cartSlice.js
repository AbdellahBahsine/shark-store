import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existingCartItem = state.cartItems.find(
                item => item.id === action.payload.id
              );
            
              if (existingCartItem) {
                state.cartItems = state.cartItems.map(item =>
                    item.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
              } else{
                state.cartItems = [...state.cartItems, { ...action.payload, quantity: 1 }]
              }
        }
    }
})

export const {addToCart} = cartSlice.actions

export const selectCart = state => state.cart.cartItems

export default cartSlice.reducer