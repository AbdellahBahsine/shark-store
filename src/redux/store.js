import {configureStore} from '@reduxjs/toolkit';

import {persistReducer} from 'redux-persist';
import {persistConfig} from './root-reducer';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(logger)
})