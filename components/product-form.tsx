'use client'

import { useAtom } from 'jotai'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { productsAtom } from '@/atoms/products'

const COLORS = ['red', 'blue', 'green', 'yellow', 'purple']

export function ProductForm() {
  const [products, setProducts] = useAtom(productsAtom)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [color, setColor] = useState('')
  const [quantity, setQuantity] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !price || !color || !quantity) return

    setProducts([
      ...products,
      {
        id: crypto.randomUUID(),
        name,
        price: Number(price),
        color,
        quantity: Number(quantity),
      },
    ])

    // Reset form
    setName('')
    setPrice('')
    setColor('')
    setQuantity('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-5 gap-4">
        <Input
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Select value={color} onValueChange={setColor}>
          <SelectTrigger>
            <SelectValue placeholder="Select color" />
          </SelectTrigger>
          <SelectContent>
            {COLORS.map((c) => (
              <SelectItem key={c} value={c}>
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button type="submit">Add Product</Button>
      </div>
    </form>
  )
}
