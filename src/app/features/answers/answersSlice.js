import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lastInterface: 7,
  currentInfoPrincipalPage: 0,
  sessionTime: 1,
  timeSystem: null,
  book: null,
  bookPage: null
}

export const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
      setLastInterface: (state, action) => {
        state.lastInterface = action.payload
      },
      setSessionTime: (state, action) => {
        state.sessionTime = action.payload
      },
      setTimeSystem: (state, action) => {
        state.timeSystem = action.payload
      },
      setBook: (state, action) => {
        state.book = action.payload
      },
      setBookPage: (state, action) => {
        state.bookPage = action.payload
      },
      setCurrentInfoPrincipalPage: (state, action) => {
        state.currentInfoPrincipalPage = action.payload
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {setLastInterface, setSessionTime, setTimeSystem, setBook, setBookPage
  ,setCurrentInfoPrincipalPage} = answersSlice.actions

  export default answersSlice.reducer