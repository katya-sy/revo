export async function getProductData() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    if (apiUrl) {
      const res = await fetch(apiUrl + '/products', {
        next: {
          revalidate: 0,
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

export async function getComboProductData() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    if (apiUrl) {
      const res = await fetch(apiUrl + '/combo', {
        next: {
          revalidate: 0,
          tags: ['combo'],
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

export async function getGiftsetData() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    if (apiUrl) {
      const res = await fetch(apiUrl + '/giftsets', {
        next: {
          revalidate: 0,
          tags: ['giftsets'],
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

export async function updateComboProduct(
  id: number,
  data: {
    title: string
    description: string
    price: number
    discountPrice: number
  },
) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    if (apiUrl) {
      const res = await fetch(`${apiUrl}/combo/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title: data.title,
          description: data.description,
          price: data.price,
          discountPrice: data.discountPrice,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        next: {
          revalidate: false,
          tags: ['combo'],
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

export async function updateGiftset(
  id: number,
  data: {
    title: string
    description: string
    price: number
    characteristics: object
  },
) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    if (apiUrl) {
      const res = await fetch(`${apiUrl}/giftsets/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title: data.title,
          description: data.description,
          price: data.price,
          characteristics: data.characteristics,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        next: {
          revalidate: false,
          tags: ['giftsets'],
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
