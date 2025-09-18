var express = require('express');
var router = express.Router();
const storeName = "My Book Store";

const books = [
  { title: "Empuran", author: "Prithviraj", price: 115 },
  { title: "Get Set Baby", author: "Unni Mukundan", price: 55 },
  { title: "Lokah", author: "DQ", price: 400 },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { storeName, books });
});

module.exports = router;
