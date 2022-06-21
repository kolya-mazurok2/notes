import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../../components/auth/SignInForm';
import { getAuthErrorMessage } from '../../helpers/errorMessage';
import { signIn } from '../../services/firestore/auth';
import { openToaster } from '../../store/slices/toasterSlice';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignInSubmit = async (email: string, password: string) => {
    let errorCode = '';
    try {
      await signIn(email, password);
      navigate('/');
    } catch (error: any) {
      dispatch(openToaster(getAuthErrorMessage(error.code)));
    }

    return errorCode;
  };

  return (
    <div className="page page--sign-in">
      <section>
        <Container>
          <SignInForm onSubmit={handleSignInSubmit} />
        </Container>
      </section>
    </div>
  );
};

export default SignIn;
