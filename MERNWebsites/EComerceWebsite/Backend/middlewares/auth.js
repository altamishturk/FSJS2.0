const jwt = require('jsonwebtoken');
const User = require('../models/user');


const isLoggedIn = (req, res, next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        const userId = decodedToken.userId;
        User.findById(userId)
          .then((user) => {
            if (!user) {
              throw new Error();
            }
            req.user = user;
            next();
          })
          .catch((error) => {
            res.status(401).json({
              message: 'Auth failed',
            });
          });
      } catch (error) {
        res.status(401).json({
          message: 'Auth failed',
        });
      }
}


const isAdmin = (req, res, next)=>{
    
    User.findById(req.user._id)
      .then((user) => {
        if (user.isAdmin) {
          next();
        } else {
          res.status(401).json({ message: 'Unauthorized' });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: 'Something went wrong' });
      });
}



module.exports = {isLoggedIn,isAdmin}