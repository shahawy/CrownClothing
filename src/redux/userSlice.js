import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.value = action.payload
    },
  },
})


export const { setCurrentUser } = userSlice.actions

export default userSlice.reducer