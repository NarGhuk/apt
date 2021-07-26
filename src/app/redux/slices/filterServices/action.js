import { Api } from '../../../http_api';
import {
  getServiceByFilter,
  getServiceByFilterSuccess,
  getServiceByFilterFailure,
  clearFilterServicesData,
} from './';

export function fetchServicesByFilter(id) {
  return async dispatch => {
    dispatch(getServiceByFilter());

    try {
      const response = await Api.fetchServicesByFilter(id);
      const data = await response.json();
      dispatch(getServiceByFilterSuccess(data));
    } catch (error) {
      dispatch(getServiceByFilterFailure());
    }
  };
}

export function removeFilterServicesData() {
  return dispatch => {
    dispatch(clearFilterServicesData());
  };
}
