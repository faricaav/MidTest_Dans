const express = require('express');
const app = express();
const {getProductData, getProductDataById} = require("../controllers/product")

/* GET PRODUCT*/
app.get('/', getProductData);
app.get('/:id', getProductDataById);

module.exports = app;