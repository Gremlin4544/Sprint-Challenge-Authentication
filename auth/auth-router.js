const router = require('express').Router();
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');

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
  let { username, password } = req.body;
  Users.findUserByUsername(username)
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({message: 'Qui Gon - its working! Its working!', token: token, user: user})
        } else {
          res.status(401).json({message: 'Invalid credentials'})
        }
      })
      .catch(err => {
        res.status(500).json({message: 'Log In Failure'})
      });
});

function generateToken(user) {
  const payload = {
    ident: user.id,
    username: user.username
  }
  const secret = process.env.JWT_SECRET || 'live free or die hard';
  const options = {
    expiresIn: '2h'
  }
  return jwt.sign(payload, secret, options);
}

module.exports = router;
