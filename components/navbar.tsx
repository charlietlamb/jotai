'use client'

import { useAtomValue } from 'jotai'
import { ShoppingCart } from 'lucide-react'
import { productsTotalAtom } from '@/atoms/products'

export function Navbar() {
  const total = useAtomValue(productsTotalAtom)

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Navbar...</h1>
        <div className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>
      </div>
    </nav>
  )
}
