import { prismaClient } from '@/lib/prisma'
import Image from 'next/image'
import { Categories } from './components/categories'
import { ProductList } from './components/product-list'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  return (
    <div>
      <Image
        className="h-auto w-full px-5"
        sizes="100vw"
        src="/banner-home-01.png"
        width={0}
        height={0}
        alt="Até 55% de desconto esse mês!"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <ProductList products={deals} />
      </div>
    </div>
  )
}
