import { createSlice } from '@reduxjs/toolkit'

import { API_STATUS } from "../../common/enums/apiEnums"

const initialState = {
    registerUserStatus: API_STATUS.NONE,
    userData: null
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getRegisterRequest: (state) => {
            state.registerUserStatus = API_STATUS.REQUEST
        },
        getRegisterSuccess: (state, action) => {
            state.registerUserStatus = API_STATUS.SUCCESS
            state.userData = action.payload
        },
        getRegisterFailure: (state,action) => {
            state.registerUserStatus = API_STATUS.FAILURE
            state.userData = action.payload
        }
    }
})

export const {
    getRegisterRequest,
    getRegisterSuccess,
    getRegisterFailure
} = AuthSlice.actions

export default AuthSlice.reducer