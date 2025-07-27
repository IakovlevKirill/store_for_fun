import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {changeSidebarVisibility} from "../app/slices/CartSidebarVisibilitySlice.ts";
import React from "react";
import {incrementItemsInCartCount} from "../app/slices/itemsInCartCountSlice.ts";
import {addItemToCart} from "../app/slices/ItemsInCartSlice.ts";

export const CartSidebar = () => {

    const dispatch = useAppDispatch();

    const isSideBarVisible = useAppSelector((state) => state.cartSidebarVisibility.isVisible);

    const cart_items = useAppSelector((state) => state.itemsInCart.items);

    const CartItem = ( props: {
        name: string;
        price: number;
    }) => {
        return(
            <div className="w-[calc(100%x)] flex flex-row justify-between bg-[rgba(0,0,0,0.04)]">
                <div className="font-[Montserrat-medium] px-[20px] py-[20px]">{props.name}</div>
                <div className="font-[Montserrat-medium] px-[20px] py-[20px]">{props.price}</div>
                <div className="h-full bg-[#FF6969]">удалить</div>
            </div>
        )
    }

    return (
        <div className="relative">

            {(isSideBarVisible == true) && (
                <div
                    className="fixed inset-0 bg-[rgba(17,25,40,0.15)] bg-opacity-50 transition-opacity duration-400 z-40"
                    onClick={() => {
                        dispatch(changeSidebarVisibility(!isSideBarVisible));
                    }}
                ></div>
            )}

            <div
                className={`fixed top-0 right-0 w-[40%] h-full bg-white shadow-lg z-50 transform transition-transform duration-400 ease-in-out ${
                    isSideBarVisible ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="w-[100%] h-[100%] p-[40px] flex flex-col gap-[40px]">
                    <div className="text-[20px] font-[Montserrat-semibold]">Корзина</div>
                    <div className="flex flex-col gap-[10px]">
                        {cart_items?.map((item) => (
                            <CartItem
                                key={item.name}
                                name={item.name}
                                price={item.price}
                            ></CartItem>
                        ))}
                    </div>
                    {(cart_items?.length !== 0) ? (
                        <button
                            onClick={()=>{

                            }}
                            className="
                                w-full border-[1px] border-[#000] py-[6px] font-[Montserrat-semibold] text-[14px] text-[#000]
                                focus:outline-none
                                hover:bg-[#000] hover:text-[#F4F4F4] transition-colors duration-200"
                        >
                            К оформлению
                        </button>
                    ) : (
                        <div className="w-full flex justify-center select-none text-[#D9D9D9]">
                            <div className="text-[#D9D9D9]">Корзина пуста</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};