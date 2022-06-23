import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../../components/auth/SignUpForm';
import { getAuthErrorMessage } from '../../helpers/errorMessage';
import { signUp } from '../../services/firestore/auth';
import { openToaster } from '../../store/slices/toasterSlice';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUpSubmit = async (email: string, password: string) => {
    let errorCode = '';
    try {
      await signUp(email, password);
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
          <SignUpForm onSubmit={handleSignUpSubmit} />
        </Container>
      </section>
    </div>
  );
};

export default SignUp;
