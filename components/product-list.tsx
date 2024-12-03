'use client'

import { useAtomValue } from 'jotai'
import { productsAtom } from '@/atoms/products'
import { ProductCard } from '@/components/product-card'

export function ProductList() {
  const products = useAtomValue(productsAtom)

  return (
    <div className="grid grid-cols-1 gap-4 mt-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
