import React from "react";
import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";

import "./bannerHome.css";
function BannerHome() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const [animating, setAnimating] = React.useState(false);

  const items = [
    {
      src: banner1,
      altText: "Slide One",
    },
    {
      src: banner2,
      altText: "Slide Two",
    },
  ];

  const itemLength = items.length - 1;

  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const carouselItemData = items.map((item) => {
    return (
      <CarouselItem
        key={item.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div className="banner-padre">
      <Carousel
        previous={previousButton}
        next={nextButton}
        activeIndex={activeIndex}
      >
        <CarouselIndicators
          items={items}
          className="btn-indicador"
          activeIndex={activeIndex}
          onClickHandler={(newIndex) => {
            if (animating) return;
            setActiveIndex(newIndex);
          }}
        />
        {carouselItemData}
        <div className="carousel-caption d-none d-md-block  caja-hija container text-start">
          <div className="contsainer mb-4">
            <h5 className="h1 " style={{ fontSize: "5rem " }}>
              Businesss
            </h5>
          </div>
          <div className="cocntainer custom-o">
            <p className="banner-p">
              Contrary to popular belief, Lorem ipsum is not simply random text
              it has roots in a piece of classical latin literature
            </p>
          </div>
          <button
            className="custom-btn btn  btn-primary mt-5"
            style={{ borderRadius: "150px 210px 210px 190px " }}
          >
            Contact US
          </button>
        </div>
        <CarouselControl
          directionText="Prev"
          direction="prev"
          onClickHandler={previousButton}
        />
        <CarouselControl
          directionText="Next"
          direction="next"
          onClickHandler={nextButton}
        />
      </Carousel>
    </div>
  );
}

export default BannerHome;
