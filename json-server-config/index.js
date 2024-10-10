/* eslint-disable @typescript-eslint/no-require-imports */
const jsonServer = require('json-server')
const path = require('path')

const index = jsonServer.create()

const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

index.use(jsonServer.defaults({}))
index.use(jsonServer.bodyParser)

index.use(router)

index.listen(5000, () => {
  console.log('server is running on 5000 port')
})
