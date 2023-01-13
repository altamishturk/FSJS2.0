const stripe = require('stripe')('sk_test_51K4MH1SCUI6JQcpYuud8rlrUGEhEIHXOTYs81VSEzLUAccSFa73wO7Ap6qnKil4nLerGLh80zjRf5aLJf1debfyl00uaKP7KQz');
const bigPromice = require("../middlewares/bigPromice");
const Product = require("../Models/product");
const ShippingDetails = require("../Models/shippingDeatils");


module.exports.makePaymentThroughStripe = bigPromice(async (req, res) => {

  const productIds = req.body.productsIds.map(p => p._id);
  let products = await Product.find({_id: {$in: productIds}});
  function getQuantity(_id){
    const p = req.body.productsIds.find(p => p._id === _id);
    return p.quantity;
  }

  const orderedItems = products.map(p => {
    return {
      price_data: {
        currency: "inr",
        product_data: {
          name: p.name,
          description:p.description,
          images: [p.images[0].url]
        },
        unit_amount: p.price * 100,
      },
      quantity: getQuantity(p._id.toString()),
    }
  })
  
  // console.log(orderedItems);

  const session = await stripe.checkout.sessions.create({
    line_items: orderedItems,
    mode: 'payment',
    success_url: `http://localhost:3000/payment-success`,
    cancel_url: `http://localhost:3000/payment-fail`,
  });


    const sd = await ShippingDetails.findOne({user: req.user._id});
    if(!sd){
      const shipping = req.body.shippingDeatils;
      await ShippingDetails.create({...shipping,fullName: `${shipping.firstName} ${shipping.lastName}`,user: req.user._id});
    }


    res.status(200).json({
        success: true,
        message: "",
        url: session.url
    })

});