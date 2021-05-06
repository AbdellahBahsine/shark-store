import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null
    },
    reducers: {
        addUser: (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export const {addUser} = userSlice.actions

export const selectUser = state => state.user.currentUser

export default userSlice.reducer