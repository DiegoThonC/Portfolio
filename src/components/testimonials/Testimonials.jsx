import './Testimonials.css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Ivan from '../../assets/ivan.png';
import Oleksandra from '../../assets/oleksandra.jpg';
import Empty from '../../assets/empty-photo.webp';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        autoplay={true}
        spaceBetween={40}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Ivan} alt="Avatar one" />
          </div>
          <h5>Iván Villarroel (Technical Leader)</h5>
          <small className="client__review">
            When I interviewed Diego, I immediately knew that he was the
            candidate I was looking for. Committed, motivated, and very
            enthusiastic about his work, it was clear from the start that he
            enjoyed what he was doing. Working with him, I could completely
            trust in his development as he adhered to best practices and
            standards, always documenting the code and keeping it modular and
            well-tested. It was a pleasure to work with him, and I would
            definitely hire him again for any project.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Empty} alt="Avatar one" />
          </div>
          <h5>Christopher Cifuentes (Fullstack Developer)</h5>
          <small className="client__review">
            Diego is a highly professional and self-taught developer, with the
            ability to adapt to new technologies and initiatives, and a strong
            willingness to continue growing as a Software Engineer. I had the
            pleasure of working with him as a frontend developer, using
            frameworks such as Angular, React, Bootstrap, as well as
            implementing components directly in HTML and CSS. It was a pleasure
            to collaborate with him on projects that provided significant value
            to the client and users.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Oleksandra} alt="Avatar one" />
          </div>
          <h5>Oleksandra Buzko (Director of the Scientific Archive of the Institute of Archaeology at the National Academy of Sciences of Ukraine)</h5>
          <small className="client__review">
            Diego is a highly professional and self-taught developer, with the
            ability to adapt to new technologies and initiatives, and a strong
            willingness to continue growing as a Software Engineer. I had the
            pleasure of working with him as a frontend developer, using
            frameworks such as Angular, React, Bootstrap, as well as
            implementing components directly in HTML and CSS. It was a pleasure
            to collaborate with him on projects that provided significant value
            to the client and users.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials