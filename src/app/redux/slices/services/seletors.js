export const loadingSelector = state => state.servicesReducer.loading;
export const hasErrorsSelector = state => state.servicesReducer.hasErrors;
export const servicesSelector = state => state.servicesReducer.servicesData.items;
export const servicesItemById = (id) => state => state.servicesReducer?.servicesData?.items?.find((item) => item.id === id);



