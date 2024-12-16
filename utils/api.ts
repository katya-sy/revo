const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function getProductData(locale: string) {
  try {
    if (apiUrl) {
      const res = await fetch(`${apiUrl}/${locale}/products`, {
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

export async function getComboProductData(locale: string) {
  try {
    if (apiUrl) {
      const res = await fetch(`${apiUrl}/${locale}/combo`, {
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

export async function getGiftsetData(locale: string) {
  try {
    if (apiUrl) {
      const res = await fetch(`${apiUrl}/${locale}/giftsets`, {
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
  locale: string,
  id: number,
  data: {
    title: string
    description: string
    price: number
  },
) {
  try {
    if (apiUrl) {
      const res = await fetch(`${apiUrl}/${locale}/products/${id}`, {
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
  locale: string,
  id: number,
  data: {
    title: string
    description: string
    price: number
    discountPrice: number
  },
) {
  try {
    if (apiUrl) {
      const res = await fetch(`${apiUrl}/${locale}/combo/${id}`, {
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
  locale: string,
  id: number,
  data: {
    title: string
    description: string
    price: number
    characteristics: object
  },
) {
  try {
    if (apiUrl) {
      const res = await fetch(`${apiUrl}/${locale}/giftsets/${id}`, {
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
