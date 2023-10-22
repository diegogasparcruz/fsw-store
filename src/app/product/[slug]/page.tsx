import { prismaClient } from '@/lib/prisma'

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

  return <h1>{product.name}</h1>
}

export default ProductDetailsPage
