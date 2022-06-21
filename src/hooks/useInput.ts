import React from 'react';
import { useState } from 'react';

const useInput = (
  input: React.MutableRefObject<HTMLDivElement | null>,
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
    handleChange,
    handleBlur,
    reset
  };
};

export default useInput;
