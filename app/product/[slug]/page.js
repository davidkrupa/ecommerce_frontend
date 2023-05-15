import { AiFillStar, AiOutlineStar } from "react-icons/ai"

import { getData } from "@api/getData"
import { Product } from "@components"
import { ProductDetailsImages, ProductDetailsCart } from "@components"

const ProductDetails = async ({ params: { slug } }) => {
  const currentProductQuery = `*[_type == "product" && slug.current == '${slug}']{
    name,
    price,
    details,
    _id,
    "image": image[].asset->url
  }`
  const productsQuery = `*[_type == "product"]{
    name,
    price,
    "slug": slug.current,
    "image": image[].asset->url
  }`

  const currentProduct = await getData(currentProductQuery)
  const products = await getData(productsQuery)

  const { name, price, details, image } = currentProduct[0]

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <ProductDetailsImages image={image} />
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className="price">${price}</p>

          <ProductDetailsCart product={currentProduct[0]} />

        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item, index) => (
              <Product key={index} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails