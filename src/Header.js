import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './header.css';

// import 'swiper/css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Container from "@mui/material/Container";

// const img=['hero-4.jpg','hero-2.jpg','hero-3.jpg','hero-1.jpg',]
const img=['img-1.png','img-2.png','img-3.png','img-4.png','img-5.png',]

// {/*<div className="image-area">*/}
// {/*    <img src="xzz.jpg" alt="Cozy Table Setting"/>*/}
// {/*</div>*/}
const Header = () => {
    return (


          <Container>
              <Swiper
                  spaceBetween={2}
                  centeredSlides={true}
                  autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="mySwiper "
              >
                  {img.map(item=>{
                      return(
                          <SwiperSlide className="image-area"  key={Math.random()*1}>
                              <img  src={item}   />
                          </SwiperSlide>
                      )
                  })}


              </Swiper>
          </Container>


    );
}
export default Header;