import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import {
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
  Pagination,
} from "swiper/modules";
import GalleryCard from "../utils/card";
import { Col, Row, Container, Modal, Button } from "react-bootstrap";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (title) => {
    setModalTitle(title); // Set modal title
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  // Dynamically generate a list of image paths from the public/images folder
  const importAllImages = () => {
    const imagesContext = require.context(
      "../../../public/galleryImages",
      false,
      /\.(png|jpe?g|svg|JPG|JPEG|webp)$/
    );
    const imagePaths = imagesContext.keys().sort();
    return imagePaths.map((image) => imagesContext(image));
  };

  const images = importAllImages();

  return (
    <div
      id="gallery"
      className="section"
      style={{
        flexWrap: "wrap",
        gap: "10px",
        padding: "20px",
        height: "100vh",
      }}
    >
      <h1 className="text-center">Gallery</h1>
      <Container>
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "60vh" }}
        >
          <Col lg={6} md={6} sm={12} className="d-flex justify-content-center">
            <GalleryCard
              title="Tutorials"
              content="Different types of stitches and aari works."
              onClick={() => openModal("Tutorials")}
            />
          </Col>
          <Col lg={6} md={6} sm={12} className="d-flex justify-content-center">
            <GalleryCard
              title="My Works"
              content="My works over the time."
              onClick={() => openModal("My Works")}
            />
          </Col>
        </Row>
      </Container>

      {/* Modal with Swiper Gallery */}
      <Modal
        show={isModalOpen}
        onHide={closeModal}
        size="lg"
        centered
        dialogClassName="modal-dialog-scrollable modal-dialog-fullscreen-sm-down"
        backdrop="true"
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Main Swiper for the Image Gallery */}
          <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
            }}
            pagination={{
              type: "fraction",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && thumbsSwiper.swiper }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index + "-" + index}>
                <LazyLoadImage
                  key={index}
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  effect="blur"
                  style={{
                    objectFit: "scale-down",
                    borderRadius: "8px",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail Swiper for Image Navigation */}
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={7}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index + "-" + index}>
                <img
                  key={index}
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  style={{ objectFit: "scale-down", borderRadius: "8px" }}
                />
                {/* <LazyLoadImage
                  key={index}
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  effect="blur"
                  style={{ objectFit: "scale-down", borderRadius: "8px", width: "100%", height: "auto" }}
                /> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};


export default Gallery;
