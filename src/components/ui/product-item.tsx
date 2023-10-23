import { formatCurrencyPtBr } from '@/helpers/format-currency'
import { ProductWithTotalPriceProps } from '@/helpers/products'
import Image from 'next/image'
import Link from 'next/link'
import { DiscountBadge } from './discount-badge'

type ProductItemProps = {
  product: ProductWithTotalPriceProps
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      {' '}
      <div className="flex flex-col gap-4">
        <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
              objectFit: 'contain',
            }}
            alt={product.name}
          />

          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-3 top-3">
              {product.discountPercentage}
            </DiscountBadge>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>

          <div className="flex items-center gap-2">
            {product.discountPercentage > 0 ? (
              <>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                  {formatCurrencyPtBr(product.totalPrice)}
                </p>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75">
                  {formatCurrencyPtBr(Number(product.basePrice))}
                </p>
              </>
            ) : (
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
                {formatCurrencyPtBr(Number(product.basePrice))}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
