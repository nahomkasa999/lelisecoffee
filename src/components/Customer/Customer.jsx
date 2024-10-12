import React from "react";
import "./Customer.css";
import { testimonials } from "../../assets/assets";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Customer() {
  return (
    <div className="customer-container">
      <h2 className="customer-heading">What Our Customers Say</h2>
      <p className="customer-description">
        Hear from our satisfied customers about their experiences and how our
        products have made a difference in their lives.
      </p>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="testimonial-Container">
          {testimonials.map((item) => (
            <SwiperSlide className="testimonial-item" key={item.id}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.testimonial}</p>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default Customer;
