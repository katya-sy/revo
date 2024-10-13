import { ProductCard } from '../product-card'
import { Edit } from '../shared/edit'
import { Button } from '../ui/button'
import { Root, Trigger } from '@radix-ui/react-dialog'
import { CustomDialogPortal } from '../ui/custom-dialog-portal'
import * as Form from '@radix-ui/react-form'

async function getData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  if (apiUrl) {
    const res = await fetch(apiUrl + '/products', {
      next: {
        revalidate: false,
        tags: ['products'],
      },
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
}

export const AdminProductList = async () => {
  const products = await getData()

  return (
    <div className="relative before:top-0 before:right-[93%] before:bottom-0 before:absolute flex flex-col gap-16 max-sm:before:hidden before:bg-blue py-24 before:w-[calc(100vw-93%)] container">
      <h3 className="font-black font-montserrat text-3xl text-blue text-center uppercase">
        Edit product cards
      </h3>
      <div className="gap-8 grid grid-cols-2 max-[1130px]:grid-cols-1 max-sm:grid-cols-2 max-xs:grid-cols-1">
        {products.map((product) => (
          <div className="relative" key={product.id}>
            <ProductCard
              imgUrl={product.imgUrl}
              title={product.title}
              price={product.price}
              description={product.description}
            />
            <Root>
              <Trigger asChild>
                <Button className="top-2 right-2 absolute" intent="icon">
                  <Edit />
                </Button>
              </Trigger>
              <CustomDialogPortal>
                {/* <Form.Root className="FormRoot">
                  <Form.Field className="FormField" name="title">
                    <div>
                      <Form.Label className="FormLabel">Title</Form.Label>
                      <Form.Message
                        className="FormMessage"
                        match="valueMissing"
                      >
                        Please enter product title
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <input maxLength={25} required />
                    </Form.Control>
                  </Form.Field>
                  <Form.Submit asChild>
                    <button className="Button">Post question</button>
                  </Form.Submit>
                </Form.Root> */}
              </CustomDialogPortal>
            </Root>
          </div>
        ))}
      </div>
    </div>
  )
}
