import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AdminBusinessState {
  selectedBusinessId: string | null;
}

const initialState: AdminBusinessState = {
  selectedBusinessId: localStorage.getItem('adminSelectedBusinessId') || null,
};

export const adminBusinessSlice = createSlice({
  name: 'adminBusiness',
  initialState,
  reducers: {
    setSelectedBusinessId: (state, action: PayloadAction<string | null>) => {
      state.selectedBusinessId = action.payload;
      if (action.payload) {
        localStorage.setItem('adminSelectedBusinessId', action.payload);
      } else {
        localStorage.removeItem('adminSelectedBusinessId');
      }
    },
  },
});

export const { setSelectedBusinessId } = adminBusinessSlice.actions;
export default adminBusinessSlice.reducer;
