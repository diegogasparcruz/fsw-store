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
    <div className="mt-8 flex flex-col gap-8">
      <Image
        src="/banner-home-01.png"
        className="h-auto w-full px-5"
        sizes="100vw"
        width={0}
        height={0}
        alt="Até 55% de desconto esse mês!"
      />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <h1 className="mb-3 pl-5 font-semibold uppercase">Ofertas</h1>
        <ProductList products={deals} />
      </div>

      <Image
        src="/banner-home-02.png"
        className="h-auto w-full px-5"
        sizes="100vw"
        width={0}
        height={0}
        alt="Até 55% de desconto em mouses!"
      />
    </div>
  )
}
