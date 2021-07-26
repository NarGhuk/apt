import { Api } from '../../../http_api';
import { getService, getServiceFailure, getServiceSuccess} from './';

export function fetchServices() {
  return async dispatch => {
    dispatch(getService());
    try {
      const response = await Api.fetchServices();
      const data = await response.json();
      dispatch(getServiceSuccess(data));
    } catch (error) {
      dispatch(getServiceFailure());
    }
  };
}
