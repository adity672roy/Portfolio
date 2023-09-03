import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assests/avtr1.jpeg";
import AVTR2 from "../../assests/avtr2.jpeg";
import AVTR3 from "../../assests/avtr3.jpeg";
import AVTR4 from "../../assests/avtr4.jpeg";
import AVTR5 from "../../assests/avtr5.jpeg";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Annie Rich",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe voluptas eum a quod odio necessitatibus ea, suscipit eaque repellendus vel nobis recusandae aliquid iste adipisci fugiat eius aut. Enim, natus.",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Rose Galvin",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe voluptas eum a quod odio necessitatibus ea, suscipit eaque repellendus vel nobis recusandae aliquid iste adipisci fugiat eius aut. Enim, natus.",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Belly Fisher",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe voluptas eum a quod odio necessitatibus ea, suscipit eaque repellendus vel nobis recusandae aliquid iste adipisci fugiat eius aut. Enim, natus.",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Lola Tung",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe voluptas eum a quod odio necessitatibus ea, suscipit eaque repellendus vel nobis recusandae aliquid iste adipisci fugiat eius aut. Enim, natus.",
  },
  {
    id: 5,
    avatar: AVTR5,
    name: "Taylor Madison",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe voluptas eum a quod odio necessitatibus ea, suscipit eaque repellendus vel nobis recusandae aliquid iste adipisci fugiat eius aut. Enim, natus.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avatar, review, name }) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
