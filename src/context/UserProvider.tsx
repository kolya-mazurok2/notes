import { onAuthStateChanged } from 'firebase/auth';
import { createContext, FC, ReactNode, useState } from 'react';
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

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export default UserProvider;

export { UserContext };
