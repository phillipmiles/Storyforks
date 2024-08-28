import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
  signInWithEmailAndPassword as _signInWithEmailAndPassword,
  onAuthStateChanged as _onAuthStateChanged,
  UserCredential,
} from 'firebase/auth';

import { auth } from './clientApp';

// Callback is passed a user object if logged in https://firebase.google.com/docs/reference/js/auth.user
export function onAuthStateChanged(callback) {
  return _onAuthStateChanged(auth, callback);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Error signing in with Google', error);
  }
}

export const signInWithEmailAndPassword = async (
  email,
  password
): Promise<UserCredential | undefined> => {
  try {
    return await _signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error signing in with email and password', error);
  }
};

export const createUserWithEmailAndPassword = async (email, password) => {
  try {
    return await _createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error creating accout with email and password', error);
  }
};

export async function signOut() {
  try {
    return auth.signOut();
  } catch (error) {
    console.error('Error signing out with Google', error);
  }
}
