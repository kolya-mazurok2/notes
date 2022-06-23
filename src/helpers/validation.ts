const isEmail = (value: string): boolean => {
  return /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)+(.\w{2,3})+$/i.test(value);
};

const isPassword = (value: string): boolean => {
  return /^[a-z0-9]{8,}$/i.test(value);
};

export { isEmail, isPassword };
