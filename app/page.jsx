import { Product, FooterBanner, HeroBanner } from '../components'
import { getData } from '@api/getData';

export default async function Home() {
  const productsQuery = `*[_type == "product"]{
      name,
      price,
      "slug": slug.current,
      "image": image[].asset->url
    }`

  const bannerQuery = `*[_type == "banner"]{
      buttonText,
      desc,
      discount,
      largeText1,
      largeText2,
      midText,
      product,
      saleTime,
      smallText,
      "image": image.asset->url
    }`

  const products = await getData(productsQuery)
  const bannerData = await getData(bannerQuery)

 
  return (
      <div>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

        <div className="products-heading">
          <h2>Best Seller Products</h2>
          <p>speaker There are many variations passages</p>
        </div>

        <div className="products-container">
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>

        <FooterBanner footerBanner={bannerData && bannerData[0]} />
      </div>
    )
    
}


