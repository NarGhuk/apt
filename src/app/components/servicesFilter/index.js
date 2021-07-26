import { IMG_BASE_URL } from '../../http_api/config';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchServicesByFilter, removeFilterServicesData } from '../../redux/slices/filterServices';

const ServicesFilter = ({ detailsFilterData }) => {
  const dispatch = useDispatch();
    let [activeFilterBox, setActiveFilterBox] = useState(null);

    const handleFilterBox = (itemId) => {
      dispatch(fetchServicesByFilter(itemId));
      setActiveFilterBox(() => itemId);
    };
    const removeStateFilterServicesData = () => {
      dispatch(removeFilterServicesData());
      setActiveFilterBox(null);
    };

    return (
      <div className="filter-content">
        <div className="filter-by">
          filter by
        </div>
        {detailsFilterData.map((item) => (
          <div className={`filter-box ${activeFilterBox === item.id ? 'active' : ''} `} key={item.id}
               onClick={() => handleFilterBox(item.id)}>
            <div>
              <img src={`${IMG_BASE_URL}${item.image}`} alt=" "/>
            </div>
            <div>{item.name}</div>
          </div>
        ))}
        <div className={'clear-filter'} onClick={() => removeStateFilterServicesData()}>
          <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.1774 1.12903L8.99005 0L5.08871 3.70968L1.18737 0L0 1.12903L4.07097 5L0 8.87097L1.18737 10L5.08871 6.29032L8.99005 10L10.1774 8.87097L6.14038 5L10.1774 1.12903Z"
              fill="#1A1A1A"/>
          </svg>
          clear
        </div>
      </div>
    );
  }
;
export default ServicesFilter;
