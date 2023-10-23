import { formatCurrencyPtBr } from '@/helpers/format-currency'
import { CartProduct, useCartContext } from '@/providers/cart-provider'
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from 'lucide-react'
import Image from 'next/image'
import { Button } from './button'

type CartItemProps = {
  product: CartProduct
}

export const CartItem = ({ product }: CartItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductCart,
  } = useCartContext()

  const handleDecreaseProductQuantityClick = () => {
    decreaseProductQuantity(product.id)
  }

  const handleIncreaseProductQuantityClick = () => {
    increaseProductQuantity(product.id)
  }

  const handleRemoveProductClick = () => {
    removeProductCart(product.id)
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex h-[77px] w-[77px] items-center justify-center  rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          alt={product.name}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
        />
      </div>

      <div className="flex flex-col">
        <p className="text-xs">{product.name}</p>

        <div className="flex items-center gap-2">
          <p className="text-sm font-bold">
            {formatCurrencyPtBr(product.totalPrice)}
          </p>

          {product.discountPercentage > 0 && (
            <p className="text-xs line-through opacity-75">
              {formatCurrencyPtBr(Number(product.basePrice))}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 pt-[5px]">
          <Button
            className="h-8 w-8"
            size="icon"
            variant="outline"
            onClick={handleDecreaseProductQuantityClick}
          >
            <ArrowLeftIcon size={16} />
          </Button>

          <span className="text-sm">{product.quantity}</span>

          <Button
            className="h-8 w-8"
            size="icon"
            variant="outline"
            onClick={handleIncreaseProductQuantityClick}
          >
            <ArrowRightIcon size={16} />
          </Button>
        </div>
      </div>

      <Button size="icon" variant="outline" onClick={handleRemoveProductClick}>
        <TrashIcon size={16} />
      </Button>
    </div>
  )
}
