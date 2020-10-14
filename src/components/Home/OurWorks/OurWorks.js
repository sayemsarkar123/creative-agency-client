import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const OurWorks = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item"><img className="img-fluid rounded" style={{maxHeight: '250px'}} src="https://i.ibb.co/GTGNM3Q/carousel-1.png" alt=""/></div>,
    <div className="item"><img className="img-fluid rounded" style={{maxHeight: '250px'}} src="https://i.ibb.co/3rvbtDp/carousel-2.png" alt=""/></div>,
    <div className="item"><img className="img-fluid rounded" style={{maxHeight: '250px'}} src="https://i.ibb.co/4mMvz4N/carousel-3.png" alt=""/></div>,
    <div className="item"><img className="img-fluid rounded" style={{maxHeight: '250px'}} src="https://i.ibb.co/NsdFHMd/carousel-4.png" alt=""/></div>,
    <div className="item"><img className="img-fluid rounded" style={{maxHeight: '250px'}} src="https://i.ibb.co/J2xy0dW/carousel-5.png" alt=""/></div>,
];
  return (
    <>
      <h2 className="text-center text-white mb-5">Here are some of <span style={{ color: '#9bc582' }}>our works</span></h2>
      <AliceCarousel
        autoPlay
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        mouseTracking
        items={items}
        responsive={responsive}
        disableButtonsControls
    />
    </>
  );
};

export default OurWorks;