import { createSlice } from '@reduxjs/toolkit';

export const itemsInCartCountSlice = createSlice({
    name: 'itemsInCartCount',
    initialState: {
        itemCount: 0,
    },
    reducers: {
        incrementItemsInCartCount: (state) => {
            state.itemCount = Number(state.itemCount) + 1;
        },
        setItemsInCartCount: (state, action) => {
            state.itemCount = action.payload;
        }
    }
});

export const {
    incrementItemsInCartCount,
    setItemsInCartCount
} = itemsInCartCountSlice.actions;

export default itemsInCartCountSlice.reducer;