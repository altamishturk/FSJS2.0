const stripe = require('stripe')('sk_test_51K4MH1SCUI6JQcpYuud8rlrUGEhEIHXOTYs81VSEzLUAccSFa73wO7Ap6qnKil4nLerGLh80zjRf5aLJf1debfyl00uaKP7KQz');
const bigPromice = require("../middlewares/bigPromice");


module.exports.makePaymentThroughStripe = bigPromice(async (req, res) => {

  const YOUR_DOMAIN = "http://localhost:3000/"

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "myProduct",
          },
          unit_amount: 1000,
        },
        quantity: 10,
      }
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });


    res.status(200).json({
        success: true,
        message: "",
        url: session.url
    })

});