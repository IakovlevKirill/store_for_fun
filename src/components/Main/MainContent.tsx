import React from 'react';
import {useNavigate} from "react-router-dom";
import {images} from "../../assets/images.ts";

interface contentComponentPropsType {
    name: string;
    image_path_front: string;
    image_path_back: string;
}

export const MainContent = () => {

    const navigate = useNavigate();

    const itemslist: contentComponentPropsType[] = []

    const testItem = {
        name: "Test",
        image_path_front: "src/assets/images/test.png",
        image_path_back: "",
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
        return (
            <button
                onClick={() => {
                    navigate('/item');
                }}
                className="flex relative h-[300px] w-[calc(25%-30px)] "
            >
                <img className="w-full z-1 h-full absolute flex" src={props.image_path_front} alt="товар"/>
            </button>
        )
    }

    return (
        <div className="mt-[200px] px-[20%] py-[20px] gap-[30px] flex flex-wrap items-start shrink justify-center">
            {itemslist?.map((item) => (
                <ItemComponent
                    key={item.name}
                    name={'test'}
                    image_path_front={'src/assets/images/example_t.png'}
                    image_path_back={''}
                ></ItemComponent>
            ))}
        </div>
    );
};