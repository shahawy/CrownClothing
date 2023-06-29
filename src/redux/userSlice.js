import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
    loading: true,  // to enhance UX and control changing from sign out to sign in at the moment of refreshing the page and make it false after (onAuthChanged) method is triggered and sets the current user
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.value = action.payload
    },
    stopUserLoading: (state) => {
      state.loading = false
    }
  },
})


export const { setCurrentUser, stopUserLoading } = userSlice.actions

export default userSlice.reducer