import { Category } from '@prisma/client'
import Image from 'next/image'

type CategoryItemProps = {
  category: Category
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-category-item-gradient flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg ">
        <Image
          src={category.imageUrl}
          alt={category.name}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          sizes="100vw"
          width={0}
          height={0}
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className="rounded-bl-lg rounded-br-lg bg-accent py-2">
        <p className="text-center text-sm font-semibold">{category.name}</p>
      </div>
    </div>
  )
}
