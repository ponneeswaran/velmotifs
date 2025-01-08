import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
 
import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay, Pagination } from 'swiper/modules';

const Gallery = ()=> {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Dynamically generate a list of image paths from the public/images folder
  const importAllImages = () => {
    // Replace with the relative path of your folder
    const imagesContext = require.context('../../public/images', false, /\.(png|jpe?g|svg)$/);
    return imagesContext.keys().map(imagesContext);
  };

  const images = importAllImages();


  return (
    <div id="gallery" className="section" style={{ flexWrap: "wrap", gap: "10px", padding: "20px" }}>
      <h1>Gallery</h1>
      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
        }}
        pagination={{
          type: 'fraction',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay, Pagination ]}
        autoplay={{
          delay:5000,
          disableOnInteraction: false,
        }}
      >
        {images.map((src, index) => (
        <SwiperSlide>
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              style={{ objectFit: "scale-down", borderRadius: "8px" }}
            />
            
        </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          
        <SwiperSlide>
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              style={{ objectFit: "scale-down", borderRadius: "8px" }}
            />
            
        </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Gallery;