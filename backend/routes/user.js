//import library
const express = require('express');
const bodyParser = require('body-parser');
const md5 = require('md5');

//implementasi library
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//import model
const model = require('../models/index');
const user = model.user

const auth = require('../auth')

//endpoint menampilkan semua data user, method: GET, function: findAll()
app.get("/", auth, (req,res) => {
    user.findAll()
        .then(result => {
            res.json({
                user : result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

//endpoint untuk menampilkan data user berdasarkan id
app.get("/:id", auth, (req, res) =>{
    user.findOne({ where: {id_user: req.params.id}})
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

//endpoint untuk menyimpan data user, METHOD: POST, function: create
app.post("/", async(req,res) => {
    let data = {
        nama_user : req.body.nama_user,
        password : md5(req.body.password),
        email : req.body.email
    }

    const query = {
        username : req.body.username
    }

    const resultuser = await user.findOne({where: query})

    if(resultuser){
        return res.json({message: "Username has been used"})
    } else {
        data.username = query.username 
        user.create(data)
            .then(result => {
                res.json({
                    message: "data has been inserted"
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    }
})

//endpoint mengupdate data user, METHOD: PUT, function:update
app.put("/:id", auth, (req,res) => {
    let param = {
        id_user : req.params.id
    }
    let data = {
        nama_user : req.body.nama_user,
        username : req.body.username,
        password : md5(req.body.password),
        email : req.body.email
    }
    user.update(data, {where: param})
        .then(result => {
            res.json({
                message: "data has been updated"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

//endpoint menghapus data user, METHOD: DELETE, function: destroy
app.delete("/:id", auth, (req,res) => {
    let param = {
        id_user : req.params.id
    }
    user.destroy({where: param})
        .then(result => {
            res.json({
                message: "data has been deleted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

module.exports = app