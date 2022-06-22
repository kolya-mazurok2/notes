import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, FC, ReactNode, useState } from 'react';
import { auth } from '../services/firestore/config';

interface IState {
  user: Object | null;
}

const INITIAL_STATE: IState = {
  user: null
};

const UserContext = createContext<IState>(INITIAL_STATE);

interface Props {
  children: ReactNode;
}

const UserProvider: FC<Props> = ({ children }: Props) => {
  const [user, setUser] = useState(INITIAL_STATE.user);
  const [isLoading, setIsLoading] = useState(true);

  onAuthStateChanged(auth, (currentUser) => {
    setIsLoading(false);

    if (user !== currentUser) {
      setUser(currentUser);
    }
  });

  return (
    <React.Fragment>
      {!isLoading && <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>}
    </React.Fragment>
  );
};

export default UserProvider;

export { UserContext };
