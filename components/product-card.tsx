'use client'

import { useAtomValue, useSetAtom } from 'jotai'
import { productsAtom } from '@/atoms/products'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    color: string
    quantity: number
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const products = useAtomValue(productsAtom)
  const setProducts = useSetAtom(productsAtom)

  const handleDelete = () => {
    setProducts(products.filter((p) => p.id !== product.id))
  }

  const updateQuantity = (increment: boolean) => {
    setProducts(
      products.map((p) =>
        p.id === product.id
          ? {
              ...p,
              quantity: increment
                ? p.quantity + 1
                : Math.max(1, p.quantity - 1),
            }
          : p
      )
    )
  }

  return (
    <Card>
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: product.color }}
          />
          <span className="font-medium">{product.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateQuantity(false)}
            >
              -
            </Button>
            <span className="w-8 text-center">{product.quantity}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateQuantity(true)}
            >
              +
            </Button>
          </div>
          <span>${(product.price * product.quantity).toFixed(2)}</span>
          <Button variant="destructive" size="sm" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
