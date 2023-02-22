//import
const express = require('express');
const cors = require('cors');

//implementasi
const app = express();
app.use(cors());

//endpoint nanti ditambahkan di sini
//endpoint user
const user = require('./routes/user');
app.use("/user", user)

//endpoint login
const login = require('./routes/login');
app.use("/login", login)

//endpoint product
const product = require('./routes/product');
app.use("/product", product)

app.use(express.static(__dirname))

//run server
app.listen(8080, () => {
    console.log('server run on port 8080')
})
