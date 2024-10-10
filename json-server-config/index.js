import { create, router as _router, defaults, bodyParser } from 'json-server'
import { resolve } from 'path'

const index = create()

const router = _router(resolve(__dirname, 'db.json'))

index.use(defaults({}))
index.use(bodyParser)

index.use(router)

index.listen(5000, () => {
  console.log('server is running on 5000 port')
})
