import React from 'react';
import {useNavigate} from "react-router-dom";
import {images} from "../../assets/images.ts";

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
        image_path_front: "src/assets/images/test.png",
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


    const ItemComponent = ( props: contentComponentPropsType ) => {

        const price_str = String(props.price) + '₽';

        console.log(price_str);

        return (
            <div className="flex flex-col gap-[15px] w-[calc(33%-30px)]">
                <button
                    onClick={() => {
                        navigate('/item');
                    }}
                    className="flex h-[400px] cursor-pointer"
                >
                    <img className="w-full h-full flex" src={props.image_path_front} alt="товар"/>
                </button>
               <button className="flex cursor-pointer">
                   <div className="text-[#000] text-[14px] font-[Consolas]">{props.name}</div>
               </button>
                <div className="flex flex-row gap-[5px]">
                    <div className="text-[#000] text-[14px] font-[Consolas]">{price_str}</div>
                </div>
            </div>
        )
    }

    return (
        <div className="mt-[150px] px-[20%] gap-[30px] flex flex-wrap items-start shrink justify-center">
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