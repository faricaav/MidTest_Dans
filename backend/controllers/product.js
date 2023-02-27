var express = require('express');
const {getProduct, getProductById} = require("../modules/product")
const redis = require('../library/redis')

const getProductData = async (req, res) => {
    try{
        const redis_key = "get_product";
        const { reply } = await redis.get(redis_key);
        const response = await getProduct();
        const dataProduct = response.data;
        let result = dataProduct;
        if (reply) {
            // cache available
            res.status(200).send(reply);
        } else {
            // set redis cache
            redis.set(redis_key, JSON.stringify(result));
            res.status(200).send(result);
        }
    }catch(error){
        console.log(error)
        res.send({
          status: false,
          message: error
        })
    }
}

const getProductDataById = async (req, res) => {
    try{
        const id = req.params.id;
        const id_number = Number(id);
        const redis_key = `get_product_by_id:${id}`;
        const { reply } = await redis.get(redis_key);
        const response = await getProductById(id_number);
        const dataProduct = response.data;
        let result = dataProduct;
        if (reply) {
            // cache available
            res.status(200).send(reply);
        } else {
            // set redis cache
            redis.set(redis_key, JSON.stringify(result));
            res.status(200).send(result);
        }
    }catch(error){
        console.log(error)
        res.send({
          status: false,
          message: error
        })
    }
}

module.exports={getProductData, getProductDataById}