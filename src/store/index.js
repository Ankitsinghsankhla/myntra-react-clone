import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";
import bagItemsSlice from "./bagItemsSlice";




const myntraStore = configureStore({
    reducer:{
        items : itemsSlice.reducer,
        bagItems:bagItemsSlice.reducer 
        }
});

export default myntraStore;