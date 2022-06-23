import { useState } from 'react';

const useInput = (
  validate: (value: string) => boolean = () => {
    return true;
  }
) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (value: string) => {
    setEnteredValue(value);

    setIsValid(validate(value));
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
    setIsValid(false);
  };

  return {
    enteredValue,
    isTouched,
    isValid,
    setEnteredValue,
    handleChange,
    handleBlur,
    reset
  };
};

export default useInput;
