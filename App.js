const express = require('express')
const app = express();

let products = require('./produtos')

app.use(express.json())

app.get('/produtos', (req, res) => {
  res.status(200).json(products)
});

app.get('/produtos/:id', (req, res) => {
  const { id } = req.params
  const product = products.find((product) => product.id === Number(id))
  res.status(200).json(product)
});

app.post('/produtos', (req, res) => {
  const content = req.body
  products = [products, content]
  res.status(201).json(products)
});

app.put('/produtos/:id', (req, res) => {
  const id = Number(req.params.id)
  const content = req.body

  const product = products.find((product) => product.id === id)

  if (!product) {
    return res.status(400).json({ "message": "Olá, o produto não foi encontrado" })
  }

  const UpProducts = products.map((product) => {
    if (product.id === id) return content
    return product
  })

  products = UpProducts
  res.status(200).json(products)
});


app.delete('/produtos/:id', (req, res) => {
  const id = Number(req.params.id)

  const product = products.find((product) => product.id === id)

  if (!product) {
    return res.status(400).json({ "message": "Olá, o produto não foi encontrado" })
  }

  products = products.filter(product => product.id !== id)
  res.status(200).json(products)
});


app.listen(4562, () => { console.log('Running now!') })



