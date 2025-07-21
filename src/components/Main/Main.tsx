import React from 'react';

export const Main = () => {

    const Header = () => {
        return (
            <div className="fixed flex flex-row items-center justify-between w-full h-[80px]">
                <div className="w-[20%]">
                    <img className="ml-[5%] w-[80px]" src="src/assets/images/1a1d60873c76396879e0fdeae186415b.gif" alt=""/>
                </div>
                <div className="w-[60%]"></div>
                <div className="w-[20%] px-[10px] flex flex-row justify-around items-center font-[Montserrat-semibold]">
                    <div>поддержка с 10:00 до 20:00</div>
                    <img className="w-[30px] h-[30px] cursor-pointer" src="src/assets/images/image%201.png" alt=""/>
                </div>
            </div>
        )
    }

    const ContentComponent = () => {
        return (
            <div className="h-[400px] w-[calc(33%-10px)] border-[1px] border-[#000]">

            </div>
        )
    }

    return (
        <div className="w-full main_page_scrollbar flex flex-col">
            <Header></Header>
            <div className="mt-[80px] px-[20%] py-[20px] main_page_scrollbar gap-[20px] flex flex-wrap items-start shrink justify-center flex-1/2">
                <ContentComponent></ContentComponent>
                <ContentComponent></ContentComponent>
                <ContentComponent></ContentComponent>
                <ContentComponent></ContentComponent>
                <ContentComponent></ContentComponent>
                <ContentComponent></ContentComponent>
                <ContentComponent></ContentComponent>
            </div>
        </div>
    );
};