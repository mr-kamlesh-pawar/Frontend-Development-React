import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        }
    }
});

// Export the actions
export const { add, remove } = CartSlice.actions;

// Export only the reducer, not the entire slice
export default CartSlice.reducer;
