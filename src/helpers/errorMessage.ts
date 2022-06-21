const getAuthErrorMessage = (code: string): string => {
  switch (code) {
    case 'auth/invalid-email':
      return 'Invalid email address!';
    case 'auth/wrong-password':
      return 'Invalid password!';
    default:
      return 'Something went wrong!';
  }
};

export { getAuthErrorMessage };
