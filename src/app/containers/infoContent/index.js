import { useSelector } from 'react-redux';
import { servicesItemById } from '../../redux/slices/services';
import { servicesFilterDataSelector } from '../../redux/slices/filterServices';
import { useServiceId } from '../../ServiceIdContext';
import Description from '../../components/description';
import AsNavFor from '../../components/slider';

const InfoContent = () => {
  const { id } = useServiceId();
  const serviceDataById = useSelector(servicesItemById(id));
  const servicesFilteredData = useSelector(servicesFilterDataSelector);
  let serviceData =  servicesFilteredData ? servicesFilteredData : serviceDataById.content.media;

  return (
    <div className="middle-content">
      <Description serviceDataById={serviceDataById}/>
      <AsNavFor serviceData={serviceData}/>
    </div>
  );
};
export default InfoContent;
