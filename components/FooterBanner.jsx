import Image from "next/image";
import Link from "next/link";

const FooterBanner = ({
  footerBanner: {
    discount,
    desc,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3 className="top-title">{largeText1}</h3>
          <h3 className="bottom-title">{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="background-sign">
          <span>&</span>
        </div>

        <div className="footer-banner-image">
          <Image
            src={image}
            fill
            alt="headphones"
            sizes="(max-width: 800px) 100vh, 450px"
          />
        </div>

        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          {/* sanity schema without slug for banner - case sensitive */}
          <Link href={`/product/sport-shoes`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
