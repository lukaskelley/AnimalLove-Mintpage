import { Slider, SliderItem } from "../common/slider/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import thumb1 from "../../assets/images/nft/v4-slider-img.jpg";
import thumb2 from "../../assets/images/nft/v4-slider-img2.jpg";
import thumb3 from "../../assets/images/nft/v4-slider-img3.jpg";

export default function SliderNFT() {
  const slideImages = [thumb1, thumb2, thumb3];

  const sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 700,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    pauseOnHover: true,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-20">
      <Slider {...sliderSettings}>
        {slideImages?.map((thumb, idx) => (
          <SliderItem key={idx}>
            <div className="border-2 border-gray-600 p-3">
              <img src={thumb} alt="thumb" />
            </div>
          </SliderItem>
        ))}
      </Slider>
    </div>
  );
}
