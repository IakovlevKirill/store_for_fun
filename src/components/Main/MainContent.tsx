import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {incrementItemsInCartCount, setItemsInCartCount} from "../../app/slices/itemsInCartCountSlice.ts";
import {useAppSelector} from "../../app/hooks.ts";
import {images} from "../../assets/images.ts";

interface contentComponentPropsType {
    name: string;
    price: number;
    image_path_front: string;
    image_path_back: string;
}

export const MainContent = () => {

    const items_in_cart_state = useAppSelector((state) => state.itemsInCartCount.itemCount);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const itemslist: contentComponentPropsType[] = []

    const testItem = {
        name: "Лонгслив Pussycat Luv Green",
        image_path_front: "src/assets/images/example_white_t.png",
        image_path_back: "src/assets/images/example_t_back.png",
        price: 12000,
    }
    itemslist.push(testItem);
    itemslist.push(testItem);
    itemslist.push(testItem);
    itemslist.push(testItem);
    itemslist.push(testItem);
    itemslist.push(testItem);
    itemslist.push(testItem);
    itemslist.push(testItem);
    itemslist.push(testItem);


    const ItemComponent = ( props: contentComponentPropsType ) => {

        const price_str = String(props.price) + '₽';

        return (
            <div className="z-4 flex flex-col gap-[15px] w-[calc(33.33%-50px)]">
                <button
                    onClick={() => navigate('/item')}
                    className="relative group cursor-pointer focus:outline-none"
                >
                    {/* Первая картинка (всегда видна) */}
                    <img
                        className="w-full h-full object-cover transition-opacity duration-400 group-hover:opacity-0"
                        src={props.image_path_front}
                        alt="товар"
                    />
                    {/* Вторая картинка (видна только при наведении) */}
                    <img
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                        src={props.image_path_back}
                        alt="товар"
                    />
                </button>
               <button className="flex cursor-pointer focus:outline-none">
                   <div className="text-[#000] text-[16px] font-[Montserrat-medium]">{props.name}</div>
               </button>
                <div className="flex flex-row gap-[5px]">
                    <div className="text-[#000] text-[14px] font-[Montserrat-medium]">{price_str}</div>
                </div>
                <button
                    onClick={()=>{
                        localStorage.setItem("cart_item_count", String(Number(items_in_cart_state) + 1));
                    }}
                    className="
                    w-full border-[1px] border-[#000] py-[6px] font-[Montserrat-semibold] text-[14px] text-[#000]
                    focus:outline-none
                    hover:bg-[#000] hover:text-[#F4F4F4] transition-colors duration-200"
                >
                    В корзину
                </button>
            </div>
        )
    }

    return (
        <div className="w-[60%] mx-[20%] flex flex-col">
            <div className="mt-[120px] w-full flex flex-wrap gap-[50px] items-start justify-between">
                {itemslist?.map((item) => (
                    <ItemComponent
                        key={item.name}
                        name={item.name}
                        image_path_front={item.image_path_front}
                        image_path_back={item.image_path_back}
                        price={item.price}
                    ></ItemComponent>
                ))}
            </div>
            <div className="mt-[100px] w-full justify-between flex gap-[10px]">
                <img className="w-[calc(25%-10px)] rounded-[10px]" src={images.image19}></img>
                <img className="w-[calc(25%-10px)] rounded-[10px]" src={images.image23}></img>
                <img className="w-[calc(25%-10px)] rounded-[10px]" src={images.image21}></img>
                <img className="w-[calc(25%-10px)] rounded-[10px]" src={images.image24}></img>
            </div>
        </div>
    );
};