import { combineReducers } from 'redux';

import cartReducer from './features/cart/cartSlice';
import userReducer from './features/user/userSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer
})

export default rootReducer;