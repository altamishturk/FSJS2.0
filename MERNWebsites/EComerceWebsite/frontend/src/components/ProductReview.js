import React from "react";

export default function ProductReview() {
    return (
        <div className="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
            <div className="flex flex-col justify-start items-start w-full space-y-8">
                <div className="flex justify-start items-start">
                    <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Reviews</p>
                </div>
                <div className="w-full flex justify-start items-start flex-col bg-gray-50 p-8">
                    
                    {/* className={"md:block " + (menu1 ? "block" : "hidden")} */}
                   <Review divder={true}/>
                   <Review divder={false}/>
                    
                </div>
            </div>
        </div>
    );
};



function Review({divder}) {
 
    return (
        <>
         <div className="md:block block pb-5">
                        <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">When you want to decorate your home, the idea of choosing a decorative theme can seem daunting. Some themes seem to have an endless amount of pieces, while others can feel hard to accomplish</p>
                        <div className="hidden md:flex mt-6 flex-row justify-start items-start space-x-4">
                            <div>
                                <img src="https://i.ibb.co/QXzVpHp/vincent-wachowiak-8g-Cm-EBVl6a-I-unsplash-1.png" alt="chair-1" />
                            </div>
                            <div>
                                <img src="https://i.ibb.co/znYKsbc/vincent-wachowiak-z-P316-KSOX0-E-unsplash-1.png" alt="chair-2" />
                            </div>
                            <div className="hidden md:block">
                                <img src="https://i.ibb.co/QXzVpHp/vincent-wachowiak-8g-Cm-EBVl6a-I-unsplash-1.png" alt="chair-3" />
                            </div>
                            <div className="hidden md:block">
                                <img src="https://i.ibb.co/znYKsbc/vincent-wachowiak-z-P316-KSOX0-E-unsplash-1.png" alt="chair-4" />
                            </div>
                        </div>
                        <div className="md:hidden carousel pt-8 cursor-none" data-flickity='{ "wrapAround": true,"pageDots": false }'>
                            <div className="carousel-cell">
                                <div className="md:w-full h-full relative">
                                    <img src="https://i.ibb.co/QXzVpHp/vincent-wachowiak-8g-Cm-EBVl6a-I-unsplash-1.png" alt="bag" className="w-full h-full object-fit object-cover" />
                                </div>
                            </div>
                            <div className="carousel-cell">
                                <div className="md:w-full h-full relative">
                                    <img src="https://i.ibb.co/znYKsbc/vincent-wachowiak-z-P316-KSOX0-E-unsplash-1.png" alt="shoes" className="w-full h-full object-fit object-cover" />
                                </div>
                            </div>
                            <div className="carousel-cell">
                                <div className="md:w-full h-full relative">
                                    <img src="https://i.ibb.co/QXzVpHp/vincent-wachowiak-8g-Cm-EBVl6a-I-unsplash-1.png" alt="wallet" className="w-full h-full object-fit object-cover" />
                                </div>
                            </div>
                            <div className="carousel-cell">
                                <div className="md:w-full h-full relative">
                                    <img src="https://i.ibb.co/znYKsbc/vincent-wachowiak-z-P316-KSOX0-E-unsplash-1.png" alt="wallet" className="w-full h-full object-fit object-cover" />
                                </div>
                            </div>
                            <div className="carousel-cell">
                                <div className="md:w-full h-full relative">
                                    <img src="https://i.ibb.co/QXzVpHp/vincent-wachowiak-8g-Cm-EBVl6a-I-unsplash-1.png" alt="wallet" className="w-full h-full object-fit object-cover" />
                                </div>
                            </div>
                            <div className="carousel-cell">
                                <div className="md:w-full h-full relative">
                                    <img src="https://i.ibb.co/znYKsbc/vincent-wachowiak-z-P316-KSOX0-E-unsplash-1.png" alt="wallet" className="w-full h-full object-fit object-cover" />
                                </div>
                            </div>
                            <div className="carousel-cell"></div>
                        </div>
                        <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                            <div>
                                <img src="https://i.ibb.co/QcqyrVG/Mask-Group.png" alt="girl-avatar" />
                            </div>
                            <div className="flex flex-col justify-start items-start space-y-2">
                                <p className="text-base font-medium leading-none text-gray-800">Anna Kendrick</p>
                                <p className="text-sm leading-none text-gray-600">14 July 2021</p>
                            </div>
                        </div>
         </div>
         <div className={`w-full h-[1px] ${divder?"bg-gray-200":""}`}></div>
        </>
    )
}


