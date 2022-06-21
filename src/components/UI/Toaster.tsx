import { Alert, Snackbar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { closeToaster } from '../../store/slices/toasterSlice';

const Toaster = () => {
  const isOpen = useSelector<RootState, boolean>((state) => state.toaster.isOpen);
  const message = useSelector<RootState, string>((state) => state.toaster.message);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeToaster());
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toaster;
