import { signInWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from './config';

const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const signOut = () => {
  return firebaseSignOut(auth);
};

export { signIn, signOut };
