import "react-tooltip/dist/react-tooltip.css";
import React,{useState} from 'react';
import {useSelector} from "react-redux";
import {MdOutlinePostAdd} from "react-icons/md";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import {AiOutlineEye} from "react-icons/ai";
import {RiDeleteBin7Line} from "react-icons/ri";
import {CiEdit} from "react-icons/ci";
import {BiUserCircle} from "react-icons/bi";
import { Link } from "react-router-dom";

function ProductList() {
    const products = useSelector(state=> state.products);
    const [tableHeaders] = useState(["Name","Price","Description","Quantity","Category","Actions"]);
// console.log(products);
  return (
    <>
            <div className="w-full bg-white shadow-lg rounded-sm border border-gray-200 mt-10">
                <header className="px-5 py-4 border-b border-gray-100 flex justify-between">
                    <h2 className="font-semibold text-gray-800">Products</h2>
                    <Link to="/admin/dashboard/products/add">
                      <MdOutlinePostAdd size={28} id="add-product" className="hover:cursor-pointer"/>
                    </Link>
                </header>
                <div className="p-3">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    {
                                        tableHeaders.map(item =>{
                                            return <th className="p-2 whitespace-nowrap" key={item}>
                                                        <div className="font-semibold text-left">{item}</div>
                                                    </th>
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100">
                              {
                               products && products.map(product=><Product key={product._id} product={product}/>)
                              }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <ReactTooltip
                anchorId="add-product"
                place="top"
                variant="info"
                content="Add New Product"
            />
            
           
    </>
  )
}

export default ProductList;



function Product({product}){

    return (
        <>
        <tr>
        
            <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 flex items-center">
                                            <BiUserCircle size={28}/>
                                            {/* <img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"/> */}
                                        </div>
                                        <div className="font-medium text-gray-800">{product.name}</div>
                                    </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left font-medium text-green-500">{product.price}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{product.description}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-lg text-left">{product.quantity}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-lg text-left">{product.category}</div>
            </td>
            <td className="py-3 px-6 text-left">
                <div className="flex item-center justify-start">
                    <div  id="view-product" className="hover:cursor-pointer w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <AiOutlineEye size={20}/>
                    </div>
                    <div id="edit-product" className="hover:cursor-pointer w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <CiEdit size={20}/>
                    </div>
                    <div id="delete-product" className="hover:cursor-pointer w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <RiDeleteBin7Line size={20}/>
                    </div>
                </div>
                <ReactTooltip
                anchorId="view-product"
                place="top"
                variant="info"
                content="View Product"
                />
                <ReactTooltip
                    anchorId="edit-product"
                    place="top"
                    variant="info"
                    content="Edit Product"
                />
                <ReactTooltip
                    anchorId="delete-product"
                    place="top"
                    variant="warning"
                    content="Delete Product"
                />
            </td>
           
        </tr>  
        </>
    )
}