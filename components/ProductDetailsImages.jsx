"use client"

import { useState } from "react"
import Image from "next/image"

const ProductDetailsImages = ({ image }) => {

  const [index, setIndex] = useState(0)

  return (
    <>
      <div className="image-container">
        <div className="product-detail-image">
          <Image
            src={image && image[index]}
            width={350}
            height={350}
            priority
            alt="product"
            sizes="(max-width: 800px) 100vh, 350px"  
          />
        </div>          
      </div>
      <div className="small-images-container">
        {image?.map((item, i) => (
          <Image 
            key={i}
            src={item}
            className={i === index ? "small-image selected-image" : "small-image"}
            onMouseEnter={() => setIndex(i)}
            width={100}
            height={100}
            alt="carousel-item"
          />
        ))}
      </div>
    </>
  )
}

export default ProductDetailsImages