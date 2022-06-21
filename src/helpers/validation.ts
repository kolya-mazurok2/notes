const isEmail = (value: string): boolean => {
  return /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)+(.\w{2,3})+$/i.test(value);
};

export { isEmail };
