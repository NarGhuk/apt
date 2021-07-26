import { useEffect } from 'react';
import { useServiceId } from '../../ServiceIdContext';
import { fetchFilter, filterSelector, hasErrorsSelector, loadingSelector } from '../../redux/slices/detailsFilter';
import { useDispatch, useSelector } from 'react-redux';
import ServicesFilter from '../../components/servicesFilter';
import Spinner from '../../components/loader';
import ErrorIndicator from '../../components/error-indicator';

const DetailsFilter = () => {
  const { id } = useServiceId();
  const dispatch = useDispatch();
  const  detailsFilterData = useSelector(filterSelector);
  const loading = useSelector(loadingSelector);
  const hasErrors = useSelector(hasErrorsSelector);

  useEffect(() => {
    dispatch(fetchFilter(id));
  }, [id, dispatch]);

  if (loading) return <Spinner/>;
  if (hasErrors) return <ErrorIndicator/>;
  return <ServicesFilter detailsFilterData={detailsFilterData} />;
};
export default DetailsFilter;
