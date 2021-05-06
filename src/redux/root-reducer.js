import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

import cartReducer from './features/cart/cartSlice';
import userReducer from './features/user/userSlice';

export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer
})

export default rootReducer;