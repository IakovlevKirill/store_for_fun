import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {images} from "../../assets/images.ts";
import {useDispatch} from "react-redux";
import {setItemsInCartCount} from "../../app/slices/itemsInCartCountSlice.ts";
import {useAppSelector} from "../../app/hooks.ts";

export const MainLayout = () => {

    const items_in_cart_state = useAppSelector((state) => state.itemsInCartCount.itemCount);

    const items_in_cart_storage = localStorage.getItem("cart_item_count");

    console.log(items_in_cart_storage);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setItemsInCartCount(items_in_cart_storage));
    }, []);

    useEffect(() => {
        if (items_in_cart_storage == null) {
            localStorage.setItem("cart_item_count", "0");
            dispatch(setItemsInCartCount(0));
            return;
        }
    }, []);

    useEffect(() => {
        if (document.documentURI == 'http://localhost:5173/') {
            navigate('/main')
        }
    }, []);

    const Header = () => {
        return (
            <div className="z-5 my-[20px] fixed flex flex-row items-center justify-between w-full h-[80px]">
                <div className="w-[20%] flex items-center justify-center">
                    <button
                        className="flex cursor-pointer focus:outline-none"
                        onClick={() => {navigate('/main')}}
                    >
                        <img className="h-[60px]" src={images.logo} alt="лого"/>
                    </button>
                </div>
                <div className="w-[60%] h-full"></div>
                <div className="w-[20%] px-[10px] flex flex-row justify-around items-center cursor-default font-[Montserrat-semibold]">
                    <div>поддержка с 12:00 по 20:00</div>
                    <button
                        className="relative w-[35px] h-[35px] flex cursor-pointer focus:outline-none"
                    onClick={() => navigate('/cart')}
                    >
                        <img className="cursor-pointer" src={images.cart} alt="">

                        </img>
                    </button>
                </div>
            </div>
        )
    }

    const Footer = () => {
        return (
            <div className="bg-[#090909] py-[100px] mt-[150px] gap-[100px] w-full flex flex-row justify-center px-[20%]">
                <div className="flex flex-col">
                    <div className="text-[16px] text-[#090909] font-[Montserrat-medium]">
                        Поддержка
                    </div>
                </div>
                <div className="text-[16px] text-[#090909] font-[Montserrat-medium]">
                    Документы
                </div>
            </div>
        )
    }

    return (
        <div className="w-full justify-between min-h-screen flex flex-col">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};