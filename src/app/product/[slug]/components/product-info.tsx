'use client'
import { Button } from '@/components/ui/button'
import { DiscountBadge } from '@/components/ui/discount-badge'
import { formatCurrencyPtBr } from '@/helpers/format-currency'
import { ProductWithTotalPriceProps } from '@/helpers/products'
import { useCartContext } from '@/providers/cart-provider'

import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from 'lucide-react'
import { useState } from 'react'

type ProductInfoProps = {
  product: ProductWithTotalPriceProps
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const { addProductToCart } = useCartContext()

  const [quantity, setQuantity] = useState(1)

  const handleDescreaseQuantityClick = () => {
    setQuantity((prev) => prev - 1)
  }

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity })
  }

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">
          {formatCurrencyPtBr(product.totalPrice)}
        </h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          {formatCurrencyPtBr(Number(product.basePrice))}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          disabled={quantity === 1}
          onClick={handleDescreaseQuantityClick}
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantityClick}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>

      <Button
        className="mt-8 font-bold uppercase"
        onClick={handleAddToCartClick}
      >
        Adicionar ao carrinho
      </Button>

      <div className="mt-8 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-2">
          <TruckIcon />

          <div className="flex flex-col">
            <p className="text-sm">
              Entrega via <span className="font-bold">FSPacket®</span>
            </p>
            <p className="text-xs text-[#8162FF]">
              Envio para <span className="font-semibold">todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="text-xs font-semibold">Frete grátis</p>
      </div>
    </div>
  )
}
