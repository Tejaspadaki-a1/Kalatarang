import React, { useState } from 'react';
import { portfolioPhotos } from '../data/portfolioPhotos';
import '../css/portfolio.css';

export default function Workshop() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <div>
      <div className="">
        <div className="text-center text-5xl text-[#E58913] font-serif font-bold p-15">
          <p>My Portfolio</p>
        </div>
        <div className="text-center p-5">
          <p>
            Welcome to my portfolio. Here you'll find a selection of my work.
            <br />
            Explore my projects to learn more about what I do.
          </p>
        </div>
      </div>

      {/* Modal */}
      <div
  className={model ? 'model open' : 'model'}
  onClick={(e) => {
    if (e.target.classList.contains('model')) {
      setModel(false);
    }
  }}
>
  <img src={tempImgSrc} alt="Enlarged" />
  <span className="close" onClick={() => setModel(false)}>
    &times;
  </span>
</div>

      {/* Gallery */}
      <div className="gallery">
        {portfolioPhotos.map((item) => (
          <img
            key={item.id}
            src={item.imgSrc}
            alt={item.imgTitle}
            className="pics"
            onClick={() => getImg(item.imgSrc)}
          />
        ))}
      </div>
    </div>
  );
}
