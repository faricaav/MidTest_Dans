const express = require('express');
const app = express();
const {getProductData, getProductDataById} = require("../controllers/product")
const auth = require('../auth')

/* GET PRODUCT*/
app.get('/', auth, getProductData);
app.get('/:id', auth, getProductDataById);

module.exports = app;