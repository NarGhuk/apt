import React from 'react';

export const ArrowNavNext = ({ arrowActive, onClick }) => (
  <div className={'nextNavArrow'} onClick={onClick}>
    <div onClick={arrowActive}>
      <svg width="15" height="17" viewBox="0 0 8 13" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.84076e-05 6.5L6.50009 -4.52015e-08L7.53418 1.03409L2.09289 6.5L7.53418 11.9413L6.50009 13L8.84076e-05 6.5Z"
          fill={'#292929'}/>
      </svg>
    </div>
  </div>
);
export const ArrowNavPrev = ({  arrowActive, onClick }) => (
  <div className={'prevNavArrow'} onClick={onClick}>
    <div onClick={arrowActive}>
      <svg width="15" height="17" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.84076e-05 6.5L6.50009 -4.52015e-08L7.53418 1.03409L2.09289 6.5L7.53418 11.9413L6.50009 13L8.84076e-05 6.5Z"
          fill={'#292929'}/>
      </svg>
    </div>
  </div>
);
