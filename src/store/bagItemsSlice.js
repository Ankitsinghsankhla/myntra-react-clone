import { createSlice } from "@reduxjs/toolkit";

const bagItemsSlice = createSlice({
  name: "bagItems",
  initialState: [],
  reducers: {
    addInitialItemsBag: (state, action) => {
      state.push(action.payload);
    },
    DeleteItemBag: (state, action) => {
      return state.filter((id) => id !== action.payload);
    }
  },
});
export const bagItemsActions = bagItemsSlice.actions;
export default bagItemsSlice;
