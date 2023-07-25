import { createSlice } from '@reduxjs/toolkit'

// Initial state of the Redux store for the 'car' slice
const initialState = {
  cars: ['Model S', 'Model 3', 'Model X', 'Model Y'],
}

// createSlice is a function from Redux Toolkit that generates a slice of Redux state, along with the corresponding actions and action creators.
const carSlice = createSlice({
  name: 'car', // The name of the slice, used as a prefix for the generated action types.
  initialState, // The initial state of the 'car' slice.
  reducers: {}, // Empty object for defining the reducers.
})

// Selector function that retrieves the 'cars' array from the Redux store state for the 'car' slice.
export const selectCars = (state) => state.car.cars

// Exporting the generated reducer from the carSlice, which will be used to update the Redux store.
export default carSlice.reducer
