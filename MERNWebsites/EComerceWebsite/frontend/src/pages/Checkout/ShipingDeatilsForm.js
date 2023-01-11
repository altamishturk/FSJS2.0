import React from 'react';
// import Select from "../../components/Select";

function ShipingDeatilsForm({setShippingDeatils,shippingDeatils}) {
  
    const handleChange =(e)=>{
        setShippingDeatils(prev =>{
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

  return (
    <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
                            <input 
                                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" 
                                type="text" 
                                placeholder="First Name" 
                                value={shippingDeatils.firstName}
                                name="firstName"
                                onChange={handleChange}
                            />
                            <input 
                                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" 
                                type="text" 
                                placeholder="Last Name" 
                                value={shippingDeatils.lastName}
                                name="lastName"
                                onChange={handleChange}
                            />
                            <input 
                                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" 
                                type="text" 
                                placeholder="Address1" 
                                value={shippingDeatils.address1}
                                name="address1"
                                onChange={handleChange}
                            />
                            <input 
                                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" 
                                type="text" 
                                placeholder="Address (line 02)" 
                                value={shippingDeatils.address2}
                                name="address2"
                                onChange={handleChange}
                            />
                            <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                <div className="relative w-full">
                                    <select name='city' value={shippingDeatils.city} onChange={handleChange} className='border w-full py-3' >
                                        <option value="city">city</option>
                                        <option value="amroha">Amroha</option>
                                    </select>
                                </div>
                                <div className="relative w-full">
                                    <select name='region' value={shippingDeatils.region} onChange={handleChange} className='border w-full py-3'>
                                        <option value="region">region(optional)</option>
                                        <option value="joya">Joya</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                <div className="relative w-full">
                                    <select name='country' value={shippingDeatils.country} onChange={handleChange} className='border w-full py-3'>
                                        <option value="country">Country</option>
                                        <option value="india">India</option>
                                    </select>
                                </div>
                                <div className="w-full">
                                    <select name='state' value={shippingDeatils.state} onChange={handleChange} className='border w-full py-3'>
                                        <option value="state">State</option>
                                        <option value="up">UP</option>
                                    </select>
                                </div>
                            </div>
                            <input name='email' value={shippingDeatils.email} onChange={handleChange} className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full" type="text" placeholder="Mail" />
                            <input name='postalCode' value={shippingDeatils.postalCode} onChange={handleChange} className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full" type="text" placeholder="Zip Code" />
                            <input name='phoneNumber' value={shippingDeatils.phoneNumber} onChange={handleChange} className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full" type="text" placeholder="Phone Number" />
                        </div>
  )
}

export default ShipingDeatilsForm