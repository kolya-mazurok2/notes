import { Button, FormControl, Link, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FormEvent, useState } from 'react';
import { isEmail } from '../../helpers/validation';
import useInput from '../../hooks/useInput';

interface Props {
  onSubmit: (email: string, password: string) => Promise<string>;
}

const SignInForm = ({ onSubmit }: Props) => {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const {
    enteredValue: email,
    isTouched: isEmailInputTouched,
    isValid: isEmailValid,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur
  } = useInput((value) => {
    return isEmail(value);
  });

  const emailInputHasError = isEmailInputTouched && !isEmailValid;

  const { enteredValue: password, handleChange: handlePasswordChange } = useInput();

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    setIsSubmiting(true);

    onSubmit(email, password).then(() => {
      setIsSubmiting(false);
    });
  };

  return (
    <Box component="form" className="sign-in-form" onSubmit={formSubmitHandler}>
      <Typography variant="h4" textAlign="center">
        Sign In
      </Typography>

      <FormControl fullWidth margin="normal">
        <TextField
          id="email"
          type="email"
          label="Email"
          variant="outlined"
          onChange={(event) => {
            handleEmailChange(event.currentTarget.value);
          }}
          onBlur={() => {
            handleEmailBlur();
          }}
          error={emailInputHasError}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          id="password"
          type="password"
          label="Password"
          variant="outlined"
          onChange={(event) => {
            handlePasswordChange(event.currentTarget.value);
          }}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <Button variant="contained" type="submit" size="large" disabled={isSubmiting}>
          Submit
        </Button>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <Link href="/sign-up" textAlign="center">
          Don&apos;t have an account? Sign up!
        </Link>
      </FormControl>
    </Box>
  );
};

export default SignInForm;
