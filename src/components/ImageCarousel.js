// // components/ImageCarousel.jsx
// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// function ImageCarousel({ images }) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider {...settings}>
//       {images.map((img, idx) => (
//         <div key={idx}>
//           <img src={img} alt={`slide-${idx}`} className="w-full h-auto" />
//         </div>
//       ))}
//     </Slider>
//   );
// }

// export default ImageCarousel;
