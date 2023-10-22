'use client'

import Image from 'next/image'
import { useState } from 'react'

type ProductImagesProps = {
  imageUrls: string[]
  name: string
}

export const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setcurrentImage] = useState(imageUrls[0])

  const handleImageClick = (imageUrl: string) => {
    setcurrentImage(imageUrl)
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 px-5">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            data-current-image={imageUrl === currentImage}
            className="flex h-[100px] items-center justify-center rounded-lg bg-accent data-[current-image=true]:border-2 data-[current-image=true]:border-solid data-[current-image=true]:border-primary"
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              style={{ objectFit: 'contain' }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
