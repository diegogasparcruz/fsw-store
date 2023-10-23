import { useCartContext } from '@/providers/cart-provider'
import { ShoppingCartIcon } from 'lucide-react'
import { Badge } from './badge'

export const Cart = () => {
  const { products } = useCartContext()

  return (
    <div>
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      {products.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  )
}
