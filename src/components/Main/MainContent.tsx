import React from 'react';
import {useNavigate} from "react-router-dom";

interface contentComponentPropsType {
    name: string;
    price: number;
    image_path_front: string;
    image_path_back: string;
}

export const MainContent = () => {

    const navigate = useNavigate();

    const itemslist: contentComponentPropsType[] = []

    const testItem = {
        name: "Лонгслив Pussycat Luv Green",
        image_path_front: "src/assets/images/example_white_t.png",
        image_path_back: "",
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

        console.log(price_str);

        return (
            <div className="z-4 flex flex-col gap-[15px] w-[calc(33.33%-50px)]">
                <button
                    onClick={() => {
                        navigate('/item');
                    }}
                    className="flex relative cursor-pointer focus:outline-none"
                >
                    <img className="w-full h-full flex" src={props.image_path_front} alt="товар"/>
                </button>
               <button className="flex cursor-pointer focus:outline-none">
                   <div className="text-[#000] text-[16px] font-[Montserrat-medium]">{props.name}</div>
               </button>
                <div className="flex flex-row gap-[5px]">
                    <div className="text-[#000] text-[14px] font-[Montserrat-medium]">{price_str}</div>
                </div>
                <button
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
        <div className="mt-[120px] mx-[20%] w-[60%] flex flex-wrap gap-[50px] items-start justify-between">
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
    );
};