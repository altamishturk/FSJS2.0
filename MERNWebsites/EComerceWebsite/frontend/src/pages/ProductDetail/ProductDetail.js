import React, { useState,useEffect,useMemo } from "react";
import ProductReview from "../../components/ProductReview";
import {useParams} from "react-router-dom";
import {currency} from "../../Constants/constants";
import {getOneProduct} from "../../store/ActionCreators/product";
import {useSelector,useDispatch} from "react-redux";
import {addCartItem, createCart} from "../../store/ActionCreators/cart";
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import {AiFillStar,AiOutlineStar} from "react-icons/ai";
import { BsStarHalf} from "react-icons/bs";
// import RatingStats from "./RatingStats";
// import MainFeatures from "./MainFeatures";
import ReviewForm from "./ReviewForm";
import Modal from "../../components/Modal";
import { creatteReview, getReviewsByProductId } from "../../store/ActionCreators/review";




const Product4 = () => {
    const [count, setCount] = useState(0);
    const [product, setProduct] = useState(null);
    const {productId} = useParams();
    const navigator = useNavigate();
    const cart = useSelector(state=>state.cart);
    const loggedInUser = useSelector(state=>state.loggedInUser);
    const dispatch = useDispatch();
    const [ratingModal, setRatingModal] = useState(false);
    const [reviewData, setReviewData] = useState({rating: 0,comment: "",images: []});
    const [reviews, setReviews] = useState(null);
    const [agrageRatings, setAvrageRatings] = useState(0);
    const isFloat = useMemo(()=>(agrageRatings%Math.trunc(agrageRatings))!==0)
    

    const addCount = () => {
        setCount((prev) => prev + 1);
    };

    const minusCount = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };


    const handleAddToCart = (_id)=>{
        if(!loggedInUser){
            return navigator("/login");
        }

        
        if(cart) {
            const isThere = cart?.products.find(p => p.product === _id);
        
            if(isThere){
                toast.info("Item Already in the cart")
                return; 
            }
            dispatch(addCartItem(cart._id,{product: _id,quantity: 1}));
        }
        else {
            dispatch(createCart({user: loggedInUser._id,products:[{product: _id,quantity: 1}]}));
        }
    }


    const handleReviewSubmit= async ()=>{
        const data = {
            ...reviewData,
            product: productId
        }

        const res = await creatteReview(data);

        if(res.success){
            setReviews(prev =>{
                return prev? [...prev,res.review]:[res.review];
            });
            toast.success(res.message);
            return false;
        }
        else {
            toast.error(res.message);
        }
    }


    useEffect(() => {
        (async ()=>{
            const resPro = await getOneProduct(productId);
            const resRev = await getReviewsByProductId(productId);
            if(resPro.success){
                setProduct(resPro.product);
            }
            if(resRev.success){
                setReviews(resRev.reviews);
                const allRatings = resRev.reviews.reduce((a, b) => a + b.rating, 0);
                setAvrageRatings(allRatings/resRev.reviews.length);
            }
        })();
    }, [productId]);

    return (
        <>
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
            <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
                {/* <!-- Description Div --> */}
                <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">{product?.category}</p>
                    <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">{product?.name}</h2>

                    <div className=" flex flex-row justify-between  mt-5">
                        <div className=" flex flex-row space-x-3">
                           
                            {
                                new Array(Math.trunc(agrageRatings)).fill('').map((r,i) => <AiFillStar key={i} size={28}/>)
                            }
                           
                            {
                                isFloat && <BsStarHalf className="" size={28}/>
                            }
                            {
                                isFloat? new Array(Math.ceil(5-agrageRatings)-1).fill('').map((r,i)=><AiOutlineStar key={i} size={28}/>):new Array(Math.ceil(5-agrageRatings)).fill('').map((r,i)=><AiOutlineStar key={i} size={28}/>)
                            }
                            
                        </div>
                        <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">{reviews?.length} {reviews?.length >9 ? "reviews":"review"}</p>
                    </div>

                    <p className=" font-normal text-base leading-6 text-gray-600 mt-7">{product?.description}</p>
                    <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">{currency}{product?.price}</p>

                    <div className="lg:mt-11 mt-10">
                        <div className="flex flex-row justify-between">
                            <p className=" font-medium text-base leading-4 text-gray-600">Select quantity</p>
                            <div className="flex">
                                <span onClick={minusCount} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">
                                    -
                                </span>
                                <input id="counter" aria-label="input" className="border border-gray-300 h-full text-center w-14 pb-1" type="text" value={count} onChange={(e) => e.target.value} />
                                <span onClick={addCount} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 ">
                                    +
                                </span>
                            </div>
                        </div>
                        <hr className=" bg-gray-200 w-full mt-4" />
                    </div>

                    <button onClick={()=>handleAddToCart(product?._id)} className="focus:outline-none focus:ring-2 hover:bg-brandbg2Hover focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-brandbg2 w-full py-5 lg:mt-12 mt-6">Add to shopping bag</button>
                </div>

                {/* <!-- Preview Images Div For larger Screen--> */}
                <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
                            {
                                product?.images[0]? <img src={product.images[0].url} alt="product" />:""
                            }
                    </div>
                    <div className=" w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                        <div className="bg-gray-100 flex justify-center items-center py-4">
                            {
                                product?.images[1]? <img src={product.images[1].url} alt="product" />:""
                            }
                        </div>
                        <div className="bg-gray-100 flex justify-center items-center py-4">
                            {
                                product?.images[2]? <img src={product.images[2].url} alt="product" />:""
                            }
                        </div>
                        <div className="bg-gray-100 flex justify-center items-center py-4">
                            {
                                product?.images[3]? <img src={product.images[3].url} alt="product" />:""
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* <MainFeatures/> */}
            {/* <ReviewForm/> */}

            
        </div>
        <Modal 
            isOpen={ratingModal} 
            setIsOpen={setRatingModal}
            title="Add Review"
            submitText="Submit Review"
            onSubmit={handleReviewSubmit}
            >
            <ReviewForm reviewData={reviewData} setReviewData={setReviewData}/>
        </Modal>
        {/* <RatingStats/> */}
        <ProductReview reviews={reviews} setRatingModal={setRatingModal}/>
        </>
    );
};

export default Product4;
