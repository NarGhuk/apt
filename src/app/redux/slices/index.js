import { combineReducers } from 'redux';
import { servicesReducer } from './services';
import { detailsFilterReducer } from './detailsFilter';
import { filterServicesReducer } from './filterServices';

const rootReducer = combineReducers({
  servicesReducer,
  detailsFilterReducer,
  filterServicesReducer,
});

export default rootReducer;
