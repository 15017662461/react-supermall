import React, { Component } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Autoplay]);
class DetailSwiper extends Component {
  render() {
    return (
      <div className="detail-swiper" style={{height: '320px',overflow: 'hidden'}}>
        <Swiper
          slidesPerView={50}
          onSlideChange={() => console.log("slide change")}
          autoplay={{delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true}}
        >
          {
            this.props.topImages.map((item,index) => {
              return <SwiperSlide key={index}><img src={item} alt="" style={{width:'100vw'}} onLoad={this.props.imgLoad} /></SwiperSlide>
            })
          }
        </Swiper>
      </div>
    );
  }
}

export default DetailSwiper;
