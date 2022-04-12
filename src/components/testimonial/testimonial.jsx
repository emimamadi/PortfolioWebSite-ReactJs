import React  from "react";

import "./testimonial.css";

// Import Swiper styles
import 'swiper/css';

import AVTR1 from "../../asset/avatar1.jpg";

import { Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';





const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testomonials__container"
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
       >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
            <h5 className="client__name">Ernest Achiver</h5>
            <small className="client__review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              dicta labore doloremque minus? Doloribus perferendis tempora nihil
              sint iure, porro error tenetur autem repudiandae esse fugiat fugit
              blanditiis ab perspiciatis delectus architecto, veritatis
              quibusdam harum similique. Nostrum tempora magnam fugit?
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
            <h5 className="client__name">Ernest Achiver</h5>
            <small className="client__review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              dicta labore doloremque minus? Doloribus perferendis tempora nihil
              sint iure, porro error tenetur autem repudiandae esse fugiat fugit
              blanditiis ab perspiciatis delectus architecto, veritatis
              quibusdam harum similique. Nostrum tempora magnam fugit?
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
            <h5 className="client__name">Ernest Achiver</h5>
            <small className="client__review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              dicta labore doloremque minus? Doloribus perferendis tempora nihil
              sint iure, porro error tenetur autem repudiandae esse fugiat fugit
              blanditiis ab perspiciatis delectus architecto, veritatis
              quibusdam harum similique. Nostrum tempora magnam fugit?
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
