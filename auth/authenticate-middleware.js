/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const secret = process.env.JWT_SECRET || 'live free or die hard';
  if (authorization) {
    jwt.verify(authorization, secret, function(err, decodedToken) {
      if (err) {
        res.status(401).json({ message: 'invalid token - you shall not pass!' })
      } else {
        req.token = decodedToken
        next();
      }
    })
  } else {
    res.status(401).json({ you: 'shall not pass!' })
  }
};
