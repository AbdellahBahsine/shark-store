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
                    ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + item.price }
                    : item
                );
              } else{
                state.cartItems = [...state.cartItems, { ...action.payload, quantity: 1 }]
              }
        },
        decrement: (state, action) => {
          const existingCartItem = state.cartItems.find(
            item => item.id === action.payload.id
          )

          if(existingCartItem.quantity === 1){
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
          } else{
            state.cartItems = state.cartItems.map(item => 
              item.id === action.payload.id
              ? {...item, quantity: item.quantity - 1, totalPrice: item.totalPrice - item.price}
              : item
            )
          }
        },
        sum: state => {

        }
    }
})

export const {addToCart, decrement} = cartSlice.actions

export const selectCart = state => state.cart.cartItems

export const selectTotalPrice = state => state.cart.cartItems.reduce((acc, cartItem) => acc + cartItem.totalPrice, 0) 

export default cartSlice.reducer