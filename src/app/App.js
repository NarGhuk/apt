import ServicesNavigation from './containers/servicesNavigation';
import InfoContent from './containers/infoContent';
import { ServiceProvider } from './ServiceIdContext';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchServices, servicesSelector, loadingSelector, hasErrorsSelector } from './redux/slices/services';
import DetailsFilter from './containers/detailsFilter';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Spinner from './components/loader';
import ErrorIndicator from './components/error-indicator';

function App() {
  const dispatch = useDispatch();
  const servicesData = useSelector(servicesSelector);
  const loading = useSelector(loadingSelector);
  const hasErrors = useSelector(hasErrorsSelector);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const renderServices = () => {

    if (loading) return <Spinner/>;
    if (hasErrors) return <ErrorIndicator/>;
    const defaultId = servicesData[0].id;
    return (
      <ServiceProvider id={defaultId}>
        <div className="app-wrapper">
          <div className="left-sidebar">
            <ServicesNavigation servicesData={servicesData}/>
          </div>
          <div className="content">
            <h1>OUR WORK</h1>
            <DetailsFilter/>
            <InfoContent/>
          </div>
        </div>
      </ServiceProvider>

    );
  };

  return renderServices();
}

export default App;
