import { computeProductTotalPrice } from '@/helpers/products'
import { useCartContext } from '@/providers/cart-provider'
import { ShoppingCartIcon } from 'lucide-react'
import { Badge } from './badge'
import { CartItem } from './cart-item'

export const Cart = () => {
  const { products } = useCartContext()

  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={computeProductTotalPrice(product) as any}
          />
        ))}
      </div>
    </div>
  )
}
