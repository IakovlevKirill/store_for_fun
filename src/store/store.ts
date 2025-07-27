import { configureStore } from '@reduxjs/toolkit';
import {storeApi} from '../api/storeApi.ts';
import {itemsInCartCountSlice} from "../app/slices/itemsInCartCountSlice.ts";
import {cartSidebarVisibilitySLice} from "../app/slices/CartSidebarVisibilitySlice.ts";
import {itemsInCartSlice} from "../app/slices/ItemsInCartSlice.ts";

export const store = configureStore({
    reducer: {
        [storeApi.reducerPath]: storeApi.reducer,

        itemsInCartCount: itemsInCartCountSlice.reducer,
        cartSidebarVisibility: cartSidebarVisibilitySLice.reducer,
        itemsInCart: itemsInCartSlice.reducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(storeApi.middleware),
});

// Экспортируем тип для использования в useSelector и useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;