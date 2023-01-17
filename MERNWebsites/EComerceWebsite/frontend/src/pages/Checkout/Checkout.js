import React, { useState,useEffect } from "react";
import {useLocation,useNavigate } from "react-router-dom";
import currencyFormeter from "../../utils/formetCurrency";
import ShipingDeatilsForm from "./ShipingDeatilsForm";
import fetchRequest from "../../utils/fatchRequest";

export default function Checkout() {
    const location = useLocation();
    const navigator = useNavigate();
    const [totalItems, setTotalItems] = useState(0);
    const [totalCharges, setTotalCharges] = useState(0);
    const [shippingCharges, setShippingCharges] = useState(0);
    const [tax, setTax] = useState(0);
    const [shippingDetails, setShippingDetails] = useState({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        region: "",
        country: "",
        postalCode: "",
        phoneNumber: "",
        state: "",
        email: ""
    });
    const productsIds = location.state.map(p => {return {_id: p.product._id,quantity: p.quantity}});

    const handleSubmit = async ()=>{
        const url = "http://localhost:4000/api/v1/payments/stripe/create-payment-intent";
        const res = await fetchRequest(url,"POST",{ items: productsIds,shippingDetails })
        if(res.success){
            navigator(`/payment/${res.clientSecret}`,{state: productsIds});
        }
    }
    

 

    useEffect(() => {
        const products = location.state;

        setTotalItems(products.length);
        const tc = products.reduce((a,b)=> a+(b.product.price * b.quantity),0)
        setTotalCharges(tc);
        setShippingCharges(200);
        setTax(100);
        // console.log(location.state);
    }, [location]);

    return (
        <div className="overflow-y-hidden">
            <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
                <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                    <div className="flex w-full  flex-col justify-start items-start">
                        <div className>
                            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
                        </div>
                        <div className="mt-2">
                            <a href="/" className="text-base leading-4 underline  hover:text-gray-800 text-gray-600">
                                Back to my bag
                            </a>
                        </div>
                        <div className="mt-12">
                            <p className="text-xl font-semibold leading-5 text-gray-800">Shipping Details</p>
                        </div>
                        <ShipingDeatilsForm setShippingDetails={setShippingDetails} shippingDetails={shippingDetails}/>
                        <button onClick={handleSubmit} className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">Proceed to payment</button>
                        <div className="mt-4 flex justify-start items-center w-full">
                            <a href="/" className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-gray-800 text-gray-600">
                                Back to my bag
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
                        <div>
                            <h1 className="text-2xl font-semibold leading-6 text-gray-800">Order Summary</h1>
                        </div>
                        <div className="flex mt-7 flex-col items-end w-full space-y-6">
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Total items</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{totalItems}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{currencyFormeter(totalCharges)}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Shipping charges</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{currencyFormeter(shippingCharges)}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Tax </p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{currencyFormeter(tax)}</p>
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center mt-32">
                            <p className="text-xl font-semibold leading-4 text-gray-800">Amount To Pay </p>
                            <p className="text-lg font-semibold leading-4 text-gray-800">{currencyFormeter(tax+shippingCharges+totalCharges)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
