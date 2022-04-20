const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const { re } = require('prettier/doc');

require('dotenv/config');

const api = process.env.API_URL;
const productsRouter = require('./routes/products');   

//Middleware
app.use(express.json());
app.use(morgan('tiny'));

app.use(`${api}/products`,productsRouter)

mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop-database'
})
.then(()=>{
    console.log('Database connection is ready...')
})
.catch((err)=>{
    console.log(err)
})

app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
})