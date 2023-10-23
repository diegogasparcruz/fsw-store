import { formatCurrencyPtBr } from '@/helpers/format-currency'
import { computeProductTotalPrice } from '@/helpers/products'
import { useCartContext } from '@/providers/cart-provider'
import { ShoppingCartIcon } from 'lucide-react'
import { Badge } from './badge'
import { Button } from './button'
import { CartItem } from './cart-item'
import { ScrollArea } from './scroll-area'
import { Separator } from './separator'

export const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useCartContext()

  return (
    <div className="flex h-full flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="h-full max-h-full overflow-hidden">
        <ScrollArea className="h-full ">
          <div className="flex h-full flex-col gap-5">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={computeProductTotalPrice(product) as any}
                />
              ))
            ) : (
              <p className="text-center font-semibold">
                Carrinho vazio. Vamos fazer compras?
              </p>
            )}
          </div>
        </ScrollArea>
      </div>

      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Subtotal</p>
            <p>{formatCurrencyPtBr(subtotal)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Entrega</p>
            <p>GRÁTIS</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Descontos</p>
            <p>{formatCurrencyPtBr(totalDiscount)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-sm font-bold">
            <p>Total</p>
            <p>{formatCurrencyPtBr(total)}</p>
          </div>

          <Button className="mt-7 font-bold uppercase">Finalizar compra</Button>
        </div>
      )}
    </div>
  )
}
