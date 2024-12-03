import { ProductForm } from '@/components/product-form'
import { ProductList } from '@/components/product-list'
import { ProductsTotal } from '@/components/products-total'
import { Navbar } from '@/components/navbar'

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-8">Product Management 👻</h1>
        <ProductForm />
        <ProductList />
        <ProductsTotal />
      </div>
    </>
  )
}
