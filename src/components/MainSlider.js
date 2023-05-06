import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";
//les requis de react pour les paginations et navigation
import { Pagination } from "swiper";

import camera from "../img/camera.png";

const slideData = [
  {
    img: camera,
    pretitle: 'Offre Special',
    titlePart1: '20% de reduction',
    titlePart2: 'À votre',
    titlePart3: 'première commande',
    btnText: 'Ajouter au panier',
  },
  {
    img: camera,
    pretitle: 'Offre Special',
    titlePart1: '20% de reduction',
    titlePart2: 'À votre',
    titlePart3: 'première commande',
    btnText: 'Ajouter au panier',
  },
  {
    img: camera,
    pretitle: 'Offre Special',
    titlePart1: '20% de reduction',
    titlePart2: 'À votre',
    titlePart3: 'première commande',
    btnText: 'Ajouter au panier',
  },
  {
    img: camera,
    pretitle: 'Offre Special',
    titlePart1: '20% de reduction',
    titlePart2: 'À votre',
    titlePart3: 'première commande',
    btnText: 'Ajouter au panier',
  },
]

const MainSlider = () => {
  //console.log(data);
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl"
    >
      <>
        {
          slideData.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
                  {/*text */}
                  <div className="w-full lg:-flex-1">
                    <div className="uppercase mb-1 text-center lg:text-left">{slide.pretitle}</div>
                    <div className="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20 ">
                      {slide.titlePart1} <br />
                      {slide.titlePart2} <br />
                      {slide.titlePart3}
                    </div>
                    <button className="btn btn-accent mx-auto lg:mx-0">Allons-y</button>
                  </div>
                  {/*img */}
                  <div className="flex-1">
                    <img className="xl:absolute xl:-right-16 xl:-bottom-12" src={slide.img} alt='' />
                  </div>
                 
                 
                </div>
                </SwiperSlide>
            );
          })
          
        }
        
      </>
    </Swiper>
  );
};

export default MainSlider;
