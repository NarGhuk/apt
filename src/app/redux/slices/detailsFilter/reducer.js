import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  hasErrors: false,
  detailsFilter: [],
};
const detailsFilterSlice = createSlice({
  name: 'DetailsFilter',
  initialState,
  reducers: {
    getDetailsFilter: state => {
      state.loading = true;
    },
    getDetailsFilterSuccess: (state, { payload }) => {
      state.detailsFilter = payload.data;
      state.loading = false;
      state.hasErrors = false;
    },
    getDetailsFilterFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getDetailsFilter,
  getDetailsFilterSuccess,
  getDetailsFilterFailure,
} = detailsFilterSlice.actions;
export const detailsFilterReducer = detailsFilterSlice.reducer;



