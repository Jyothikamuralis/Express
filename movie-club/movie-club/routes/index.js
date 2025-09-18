const express = require('express');
const router = express.Router();


function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.get('/', (req, res) => {
  res.render('form', { errors: {}, values: {} });
});

router.post('/join', (req, res) => {
  const { email, password } = req.body;
  let errors = {};


  if (!isValidEmail(email)) {
    errors.email = 'Invalid email format';
  }

  if (!password || password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  if (Object.keys(errors).length > 0) {
    res.render('form', { errors, values: { email } });
  } else {
    res.render('welcome', { email });
  }
});

module.exports = router;

