import { computeProductTotalPrice } from '@/helpers/products'
import { prismaClient } from '@/lib/prisma'
import { ProductImages } from './components/product-images'
import { ProductInfo } from './components/product-info'

type ProductDetailsPageProps = {
  params: {
    slug: string
  }
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: params.slug,
    },
  })

  if (!product) return null

  return (
    <div className="flex flex-col gap-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
    </div>
  )
}

export default ProductDetailsPage
