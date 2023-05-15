import Image from "next/image"
import Link from "next/link"

const Product = ({ product: { image, name, slug, price } }) => {

  return (
    <div>
      <Link href={`/product/${slug}`}>
        <div className="product-card">
          <div className="product-image">
            <Image 
              src={image && image[0]}
              width={250}
              height={250}
              alt="product-card"
            />
          </div>
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product