import Link from "next/link"
import Image from "next/image"

const HeroBanner = ({ heroBanner }) => {

  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <div className="hero-banner-image-container">
          <Image
            src={heroBanner.image}
            fill
            alt="headphones"
            sizes="(max-width: 800px) 100vh, 450px"            
          />
        </div>

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner