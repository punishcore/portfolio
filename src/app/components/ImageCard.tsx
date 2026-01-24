'use client'

import Image, { StaticImageData } from 'next/image'

type ImageItem = {
  img: string | StaticImageData
  alt: string
  width: number
  height: number
}

type Props = {
  imagedatas: ImageItem | ImageItem[]
}

export default function ImageCard({ imagedatas }: Props) {
  const images = Array.isArray(imagedatas) ? imagedatas : [imagedatas]

  return (
    <div className="border dark:border-gray-700 border-gray-300 p-1">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.img}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      ))}
    </div>
  )
}
