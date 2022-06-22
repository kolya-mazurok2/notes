import React, { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';

interface Props {
  children: ReactNode;
}

const Protected = ({ children }: Props) => {
  const { user } = useContext(UserContext);

  return user ? <React.Fragment>{children}</React.Fragment> : <Navigate to="/" />;
};

export default Protected;
