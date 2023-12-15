import React, { useRef, useState } from 'react';

const images = [
    '/img/1.png',
    '/img/2.png',
    '/img/3.png',
];

function Start() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handleChangeIndex = (index, indexLatest) => {
    if (index === images.length - 1 && indexLatest === images.length - 2) {
      // Seuil atteint, redirige vers la page Home
      window.location.href = '/home';
    }
    setCurrentIndex(index);
  };

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const scrollWidth = e.target.scrollWidth;
    const clientWidth = e.target.clientWidth;

    if (scrollLeft + clientWidth >= scrollWidth - 50) {
      // Seuil de défilement atteint, change de page
      window.location.href = '/home';
    }
  };

  return (
    <div onScroll={handleScroll} style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }} ref={containerRef}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`image-${index}`}
          style={{ width: '100vw', height: '100vh', display: 'inline-block' }}
        />
      ))}
    </div>
  );
}

export default Start;
