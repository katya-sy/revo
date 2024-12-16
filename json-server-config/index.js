/* eslint-disable @typescript-eslint/no-require-imports */
const jsonServer = require('json-server')
const path = require('path')

const index = jsonServer.create()

const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

index.use(jsonServer.defaults({}))
index.use(jsonServer.bodyParser)

index.get('/:lang/:route', (req, res) => {
  const lang = req.params.lang
  const route = req.params.route
  const data = router.db.get(lang).get(route).value()

  if (!data) {
    return res.status(404).json({ error: 'Data not found' })
  }

  res.json(data)
})

index.patch('/:lang/:route/:id', (req, res) => {
  const lang = req.params.lang
  const route = req.params.route
  const id = req.params.id
  const data = req.body

  if (!router.db.get(lang).value()) {
    return res.status(404).json({ error: 'Language not found' })
  }

  const product = router.db
    .get(lang)
    .get(route)
    .find({ id: Number(id) })
    .value()
  if (!product) {
    return res.status(404).json({ error: 'Product not found' })
  }

  router.db
    .get(lang)
    .get(route)
    .find({ id: Number(id) })
    .assign(data)
    .write()

  const updatedProduct = router.db
    .get(lang)
    .get(route)
    .find({ id: Number(id) })
    .value()
  res.json(updatedProduct)
})

index.listen(5000, () => {
  console.log('server is running on 5000 port')
})
