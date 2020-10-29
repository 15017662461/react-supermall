import React, { Component } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import './HomeSwiper.css'

SwiperCore.use([Autoplay]);
class HomeSwiper extends Component {
  render() {
    return (
      <div className="home-swiper">
        <Swiper
          slidesPerView={50}
          onSlideChange={() => console.log("slide change")}
          autoplay={{delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true}}
        >
          {
            this.props.banners.map((banner,index) => {
              return <SwiperSlide key={index}><img src={banner.image} alt="" onLoad={this.props.imgLoad} /></SwiperSlide>
            })
          }
        </Swiper>
      </div>
    );
  }
}

export default HomeSwiper;
