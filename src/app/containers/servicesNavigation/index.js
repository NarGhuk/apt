import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useServiceId } from '../../ServiceIdContext';
import { IMG_BASE_URL } from '../../http_api/config';
import { clearFilterServicesData } from '../../redux/slices/filterServices';
import Slider from 'react-slick';
import { ArrowNavPrev, ArrowNavNext } from './helper';

const ServicesNavigation = ({ servicesData }) => {
  let [activeId, setActiveId] = useState(0);

  const { setId } = useServiceId();
  const dispatch = useDispatch();
  const settings = {
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };
  const selectServices = (id) => {
    setActiveId(id);
    setId(id);
    dispatch(clearFilterServicesData());
  };

  return (
    <div className="services-list ">
      <div className={'services-item-wrapper'}>
        <Slider
          nextArrow={
            <ArrowNavNext
              className={'nextNavArrow'}
            />
          }
          prevArrow={
            <ArrowNavPrev
              className={'prevNavArrow'}
            />}
          {...settings}>
          {servicesData.map((item) => (
            <div key={item.id}
                 className={`services-item ${activeId === item.id ? 'active' : ''} `}
                 onClick={() => selectServices(item.id)}>
              <div className={'nav-icons'}><img
                src={activeId === item.id ? `${IMG_BASE_URL}${item.active_icon}` : `${IMG_BASE_URL}${item.icon}`}
                alt=""/></div>
              <h2>{item.title}</h2>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );

};

export default ServicesNavigation;


