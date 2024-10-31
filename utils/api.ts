export async function getData() {
  try {
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
  } catch (error) {
    console.error(error)
  }
}

export async function updateProduct(
  id: number,
  data: {
    title: string
    description: string
    price: number
  },
) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    if (apiUrl) {
      const res = await fetch(`${apiUrl}/products/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title: data.title,
          description: data.description,
          price: data.price,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        next: {
          revalidate: false,
          tags: ['products'],
        },
      })

      if (!res.ok) {
        throw new Error('Failed to patch data')
      }
      return res.json()
    }
  } catch (error) {
    console.error(error)
  }
}
