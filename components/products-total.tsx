'use client'

import { useAtomValue } from 'jotai'
import { Card, CardContent } from './ui/card'
import { productsTotalAtom } from '@/atoms/products'

export function ProductsTotal() {
  const total = useAtomValue(productsTotalAtom)

  return (
    <Card className="mt-8">
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">Total</span>
          <span className="text-lg">${total.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  )
}
