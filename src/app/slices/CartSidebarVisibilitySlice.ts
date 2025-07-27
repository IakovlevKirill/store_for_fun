import { createSlice } from '@reduxjs/toolkit';

export const cartSidebarVisibilitySLice = createSlice({
    name: 'cartSidebarVisibility',
    initialState: {
        isVisible: false,
    },
    reducers: {
        changeSidebarVisibility: (state, action) => {
            state.isVisible = action.payload;
        }
    }
});

export const {
    changeSidebarVisibility,
} = cartSidebarVisibilitySLice.actions;

export default cartSidebarVisibilitySLice.reducer;