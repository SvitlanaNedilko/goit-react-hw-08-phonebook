import { createSlice } from '@reduxjs/toolkit'
import authOperathions from './auth-operathions'

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggenIn: false,
  isFetchingCurrentUser: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [authOperathions.register.fulfilled](state, action) {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggenIn = true
    },
    [authOperathions.logIn.fulfilled](state, action) {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggenIn = true
    },
    [authOperathions.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null }
      state.token = null
      state.isLoggenIn = false
    },

    [authOperathions.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true
    },

    [authOperathions.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload
      state.isLoggenIn = true
      state.isFetchingCurrentUser = false
    },

    [authOperathions.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false
    },
  },
})

export default authSlice.reducer
