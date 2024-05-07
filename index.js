const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

// Product route
const products = require('./routes/products')

// All routes
app.use('/products', products)

app.listen(process.env.APP_PORT, () => {
    console.log(`App listening on port: ${process.env.APP_PORT}`)
})