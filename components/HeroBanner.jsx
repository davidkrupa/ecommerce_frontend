import Link from "next/link";
import Image from "next/image";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <p className="beats-solo">{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      <div className="hero-banner-image">
        <Image
          src={heroBanner.image}
          fill
          priority
          alt="headphones"
          sizes="(max-width: 800px) 100vh, 550px"
        />
      </div>

      <div>
        {/* sanity schema without slug for banner - case sensitive */}
        <Link href={`/product/sport-shoes`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
