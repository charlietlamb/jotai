import { atom } from 'jotai'

interface Product {
  id: string
  name: string
  price: number
  color: string
  quantity: number
}

// initilal products for demo
const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Coffee Mug',
    price: 12.99,
    color: 'blue',
    quantity: 2,
  },
  {
    id: '2',
    name: 'Notebook',
    price: 4.99,
    color: 'red',
    quantity: 5,
  },
  {
    id: '3',
    name: 'Headphones',
    price: 59.99,
    color: 'purple',
    quantity: 1,
  },
  {
    id: '4',
    name: 'Water Bottle',
    price: 24.99,
    color: 'green',
    quantity: 3,
  },
  {
    id: '5',
    name: 'Mouse Pad',
    price: 9.99,
    color: 'blue',
    quantity: 4,
  },
  {
    id: '6',
    name: 'Desk Lamp',
    price: 34.99,
    color: 'yellow',
    quantity: 2,
  },
  {
    id: '7',
    name: 'Keyboard',
    price: 89.99,
    color: 'red',
    quantity: 1,
  },
]

export const productsAtom = atom<Product[]>(initialProducts)

export const productsTotalAtom = atom((get) => {
  const products = get(productsAtom)
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  )
})
