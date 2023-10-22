import Image, { ImageProps } from 'next/image'

export const PromoBanner = ({ src, alt }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      className="h-auto w-full px-5"
      sizes="100vw"
      width={0}
      height={0}
    />
  )
}
