"use client"

import Link from "next/link"
import Image from "next/image"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import { Product } from "@components"

const ProductCarousel = ({ products }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <Carousel 
      responsive={responsive}
    >
      {products.map((item, index) => (
        <div key={index} className="product-carousel-card-margin">
          <div className="product-carousel-card">
            <Link href={`/product/${item.slug}`}>
              <div className="product-carousel-context">
                <div className="product-carousel-image">
                  <Image 
                    src={item.image && item.image[0]}
                    width={200}
                    height={200}
                    alt="product-card"
                  />
                </div>
                <p className="product-name">{item.name}</p>
                <p className="product-price">${item.price}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}


    </Carousel>
  )
}

export default ProductCarousel