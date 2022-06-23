import { Button, FormControl, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FormEvent, useState } from 'react';
import { isEmail, isPassword } from '../../helpers/validation';
import useInput from '../../hooks/useInput';

interface Props {
  onSubmit: (email: string, password: string) => Promise<string>;
}

const SignUpForm = ({ onSubmit }: Props) => {
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

  const {
    enteredValue: password,
    isTouched: isPasswordTouched,
    isValid: isPasswordValid,
    handleChange: handlePasswordChange,
    handleBlur: handlePasswordBlur
  } = useInput((value) => {
    return isPassword(value);
  });

  const passwordHasError = isPasswordTouched && !isPasswordValid;

  const {
    isTouched: isRepeatPasswordToucher,
    isValid: isRepeatPasswordValid,
    handleChange: handleRepeatPasswordChange,
    handleBlur: handleRepeatPasswordBlur
  } = useInput((value) => {
    return value === password;
  });

  const repeatPasswordHasError = isRepeatPasswordToucher && !isRepeatPasswordValid;

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
          onBlur={handlePasswordBlur}
          error={passwordHasError}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          id="repeat-password"
          type="password"
          label="Repeat password"
          variant="outlined"
          onChange={(event) => {
            handleRepeatPasswordChange(event.currentTarget.value);
          }}
          onBlur={handleRepeatPasswordBlur}
          error={repeatPasswordHasError}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <Button variant="contained" type="submit" size="large" disabled={isSubmiting}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default SignUpForm;
