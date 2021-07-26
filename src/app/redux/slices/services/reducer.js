import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  hasErrors: false,
  servicesData: [],
};
const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    getService: state => {
      state.loading = true;
    },
    getServiceSuccess: (state, { payload }) => {
      state.servicesData = payload.data;
      state.loading = false;
      state.hasErrors = false;
    },
    getServiceFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const servicesReducer =  servicesSlice.reducer;
export const { getService, getServiceSuccess, getServiceFailure } = servicesSlice.actions;



