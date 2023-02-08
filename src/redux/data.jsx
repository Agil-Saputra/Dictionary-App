import { createSlice } from "@reduxjs/toolkit"

export const data = createSlice({
  name : "data",
  initialState: {value: { keyword: "" }},
  reducers: {
    Request : (state, action) => {
      state.value = action.payload
    }
  }
})

export default data.reducer