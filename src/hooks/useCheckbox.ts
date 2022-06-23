import { useState } from 'react';

const useCheckbox = () => {
  const [enteredValue, setEnteredValue] = useState(false);

  const handleChange = (value: boolean) => {
    setEnteredValue(value);
  };

  const reset = () => {
    setEnteredValue(false);
  };

  return {
    enteredValue,
    setEnteredValue,
    handleChange,
    reset
  };
};

export default useCheckbox;
