import { createSlice } from '@reduxjs/toolkit';

interface ToasterState {
  isOpen: boolean;
  message: string;
}

const DEFAULT_MESSAGE = 'Something went wrong!';

const INITIAL_STATE: ToasterState = {
  isOpen: false,
  message: DEFAULT_MESSAGE
};

const toasterSlice = createSlice({
  name: 'toaster',
  initialState: INITIAL_STATE,
  reducers: {
    openToaster: (state, action) => {
      state.isOpen = true;

      state.message = action.payload ? action.payload : DEFAULT_MESSAGE;
    },
    closeToaster: (state) => {
      state.isOpen = false;
    }
  }
});

export default toasterSlice.reducer;

export const { openToaster, closeToaster } = toasterSlice.actions;
