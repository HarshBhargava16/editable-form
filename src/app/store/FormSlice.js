import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fields: [],
  theme: {
    color: "#000",
    backgroundColor: "#fff",
    fontSize: "16px",
    fontFamily: "Arial, sans-serif",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addField: (state, action) => {
      console.log(action.payload + "hi");
      state.fields.push(action.payload);
    },
    updateTheme: (state,action)=>
      {
       state.theme = {...state.theme, ...action.payload}
      }
  },
});

export const { addField ,updateTheme} = formSlice.actions;
export default formSlice.reducer;
