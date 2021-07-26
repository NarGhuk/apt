export const servicesFilterDataSelector = state => state.filterServicesReducer.filteredServicesData?.items;
export const loadingFilteredServicesSelector = state => state.filterServicesReducer.loading;
export const hasErrorsFilteredServicesSelector = state => state.filterServicesReducer.hasErrors;


