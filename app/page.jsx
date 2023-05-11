import { Product, FooterBanner, HeroBanner } from '../components'
import { getData } from '@api/getData';

export default async function Home() {
  const productsQuery = `*[_type == "product"]`
  const bannerQuery = `*[_type == "banner"]`

  const products = await getData(productsQuery);
  const bannerData = await getData(bannerQuery)
 
  return (
      <div>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

        <div className="products-heading">
          <h2>Best Seller Products</h2>
          <p>speaker There are many variations passages</p>
        </div>

        <div className="products-container">
          {products?.map((product) => product.name)}
        </div>

        <FooterBanner />
      </div>
    )
    
}


