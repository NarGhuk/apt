import { Api } from '../../../http_api';
import { getDetailsFilter, getDetailsFilterSuccess, getDetailsFilterFailure } from './reducer';

export function fetchFilter(id) {
  return async dispatch => {
    dispatch(getDetailsFilter());
    try {
      const response = await Api.fetchFilter(id);
      const data = await response.json();
      dispatch(getDetailsFilterSuccess(data));
    } catch (error) {
      dispatch(getDetailsFilterFailure());
    }
  };
}
