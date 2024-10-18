import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";  // Correct import of the default export

export const store = configureStore({
    reducer: {
        cart: cartReducer  // Use the reducer here
    }
});
