import React from 'react';

export const ArrowNext = ({ color, arrowActive, onClick }) => (
  <div className={'nextArrow'} onClick={onClick}>
    <div onClick={arrowActive}>
      <svg width="8" height="13" viewBox="0 0 8 13" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.84076e-05 6.5L6.50009 -4.52015e-08L7.53418 1.03409L2.09289 6.5L7.53418 11.9413L6.50009 13L8.84076e-05 6.5Z"
          fill={color}/>
      </svg>
    </div>
  </div>
);
export const ArrowPrev = ({ color, arrowActive, onClick }) => (
  <div className={'prevArrow'} onClick={onClick}>
    <div onClick={arrowActive}>
      <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.84076e-05 6.5L6.50009 -4.52015e-08L7.53418 1.03409L2.09289 6.5L7.53418 11.9413L6.50009 13L8.84076e-05 6.5Z"
          fill={color}/>
      </svg>
    </div>
  </div>
);
export const BigArrowNext = ({ arrowActive, onClick }) => (
  <div className={`big-nextArrow `} onClick={onClick}>
    <div onClick={arrowActive}>
      <svg width="30" height="12" viewBox="0 0 30 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.92852e-07 5.21856L4.35805e-07 7.01497L26.3623 7.01497L22.7246 10.6078L24.1168 12L30 6.11677L24.1168 0.233532L22.7246 1.62575L26.3623 5.21856L5.92852e-07 5.21856Z" fill="white"/>
      </svg>
    </div>
  </div>
);
export const BigArrowPrev = ({arrowActive, onClick }) => (
  <div className={`big-prevArrow `} onClick={onClick}>
    <div onClick={arrowActive}>
      <svg width="30" height="12" viewBox="0 0 30 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.92852e-07 5.21856L4.35805e-07 7.01497L26.3623 7.01497L22.7246 10.6078L24.1168 12L30 6.11677L24.1168 0.233532L22.7246 1.62575L26.3623 5.21856L5.92852e-07 5.21856Z" fill="white"/>
      </svg>
    </div>
  </div>
);



