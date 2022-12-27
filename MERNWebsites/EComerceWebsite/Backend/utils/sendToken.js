const jwt = require('jsonwebtoken');

function sendToken(req,res) {
 
     // If the username and password are valid, generate a JWT
    const payload = {
        ...req.user
    };

    delete req.user.password;

    const secret = process.env.JWT_KEY;
    const options = {
        expiresIn: '1h'
    };
    const token = jwt.sign(payload, secret, options);


    res.cookie('token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,  // 1 week
        httpOnly: true,
        secure: true
      });


    res.status(200).json({
        success: true,
        message: "Login Success!",
        token
    })
}


module.exports = sendToken;