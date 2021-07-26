import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  hasErrors: false,
  filteredServicesData: [],
};
const filterServicesSlice = createSlice({
  name: 'filteredServicesData',
  initialState,
  reducers: {
    getServiceByFilter: state => {
      state.loading = true;
    },
    getServiceByFilterSuccess: (state, { payload }) => {
      state.filteredServicesData = payload.data;
      state.loading = false;
      state.hasErrors = false;
    },
    getServiceByFilterFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },
    clearFilterServicesData: state => {
      state.filteredServicesData = [];
    },
  },
});

export const {
  getServiceByFilter,
  getServiceByFilterSuccess,
  getServiceByFilterFailure,
  clearFilterServicesData,
} = filterServicesSlice.actions;
export const filterServicesReducer = filterServicesSlice.reducer;




