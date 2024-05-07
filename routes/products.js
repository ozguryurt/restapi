const express = require('express')
const router = express.Router()

// Get all products
router.get('/', async (req, res) => {
    const response = await fetch(`https://dummyjson.com/products`)
    const data = await response.json()
    res.status(200).json(data)
})

// Get product info by ID or name
router.get('/:productInfo', async (req, res) => {
    const param = req.params.productInfo;
    const isInteger = /^\d+$/.test(param);
    if (isInteger) {
        const response = await fetch(`https://dummyjson.com/products/${param}`)
        const data = await response.json()
        res.status(200).json(data)
    } else {
        const response = await fetch(`https://dummyjson.com/products/search?q=${param}`)
        const data = await response.json()
        res.status(200).json(data)
    }
})

// Add new product
router.post('/', async (req, res) => {
    const response = await fetch(`https://dummyjson.com/products/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: 'New product!'
        })
    })
    const data = await response.json()
    res.status(200).json(data)
})

// Update product
router.put('/:productId', async (req, res) => {
    const productId = req.params.productId
    const response = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: 'New item title!'
        })
    })
    const data = await response.json()
    res.status(200).json(data)
})

// Delete product
router.delete('/:productId', async (req, res) => {
    const productId = req.params.productId;
    const response = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: 'DELETE',
    })
    const data = await response.json()
    res.status(200).json(data)
})

module.exports = router