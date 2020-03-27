const router = require('express').Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;
  User.addUser(user)
      .then(saved => {
        const token = generateToken(user);
        res.status(201).json({user: saved, token: token})
      })
      .catch(err => {
        res.status(500).json({message: 'Failed to add user'})
      });
});

router.post('/login', (req, res) => {
  // implement login

});

function generateToken(user) {
  const payload = {
    ident: user.id,
    username: user.username
  }
  const secret = process.env.JWT_SECRET || 'live free or die hard';
  const options = {
    expiresIn = '2h'
  }
  return jwt.sign(payload, secret, options);
}

module.exports = router;
