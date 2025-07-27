import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
    name: string;
    price: number;
}

interface CartItemsArray {
    items: CartItem[];
}

const initialState: CartItemsArray = {
    items: []
};

export const itemsInCartSlice = createSlice({
    name: 'itemsInCart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.items.push(action.payload);
        },
        clearCart: (state) => {
            state.items = []
        }
    }
});

export const {
    addItemToCart,
    clearCart
} = itemsInCartSlice.actions;

export default itemsInCartSlice.reducer;