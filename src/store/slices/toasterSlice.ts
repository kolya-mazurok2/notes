import { createSlice } from '@reduxjs/toolkit';

type ToastSeverity = 'error' | 'success';

interface ToasterState {
  isOpen: boolean;
  message: string;
  severity: ToastSeverity;
}

const DEFAULT_MESSAGE = 'Something went wrong!';
const DEFAULT_SEVERITY: ToastSeverity = 'error';

const INITIAL_STATE: ToasterState = {
  isOpen: false,
  message: DEFAULT_MESSAGE,
  severity: 'success'
};

const toasterSlice = createSlice({
  name: 'toaster',
  initialState: INITIAL_STATE,
  reducers: {
    openToaster: (state, action) => {
      console.log(action.payload);
      state.isOpen = true;

      state.message = action.payload.message ? action.payload.message : DEFAULT_MESSAGE;
      state.severity = action.payload.severity ? action.payload.severity : DEFAULT_SEVERITY;
    },
    closeToaster: (state) => {
      state.isOpen = false;
    }
  }
});

export default toasterSlice.reducer;

export const { openToaster, closeToaster } = toasterSlice.actions;

export type { ToastSeverity };
